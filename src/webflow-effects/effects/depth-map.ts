import { Sa5Effect } from './effect-handler';
import * as THREE from 'three';

export class Sa5DepthMapEffect extends Sa5Effect {
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;
    private planeGeometry: THREE.PlaneGeometry;
    private planeMaterial: THREE.ShaderMaterial;
    private plane: THREE.Mesh;
    private textureLoader: THREE.TextureLoader = new THREE.TextureLoader();
    private cursor = { x: 0, y: 0, lerpX: 0, lerpY: 0 };
    private originalImageDetails = { width: 0, height: 0, aspectRatio: 0 };
    private settings = {
        xThreshold: 20,
        yThreshold: 20,
        originalImagePath: '',
        depthImagePath: ''
    };
    private imageElement: HTMLImageElement;
    private canvasElement: HTMLCanvasElement;

    constructor(elem: HTMLElement, config = {}) {
        super(elem, config);
        this.imageElement = elem as HTMLImageElement;
        this.settings.originalImagePath = this.imageElement.src;
        this.settings.depthImagePath = this.imageElement.getAttribute('wfu-effect-setting-depth-map') || '';
    }

    init() {
        super.init();
        this.setupScene();
        this.create3dImage();
        this.loadImages();
        this.animate();

        window.addEventListener('resize', this.onWindowResize.bind(this));
    }

    private setupScene() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 100); // Aspect ratio will be set later
        this.camera.position.z = 0.7;
        this.scene.add(this.camera);

        const canvas = document.createElement('canvas');
        this.canvasElement = canvas; // Store the canvas element

        const parent = this.imageElement.parentNode;

        if (parent) {
            parent.replaceChild(canvas, this.imageElement);  // Replace image with canvas
            this.elem = canvas; 
        } else {
            console.error('Parent node not found for the element.');
            return;
        }

        this.canvasElement.addEventListener('mousemove', this.onMouseMove.bind(this));

        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvasElement });
    }

    private loadImages() {
        this.textureLoader.load(this.settings.depthImagePath, (depthTexture) => {
            this.textureLoader.load(this.settings.originalImagePath, (originalTexture) => {
                this.originalImageDetails.width = this.imageElement.naturalWidth;
                this.originalImageDetails.height = this.imageElement.naturalHeight;
                this.originalImageDetails.aspectRatio = this.originalImageDetails.width / this.originalImageDetails.height;

                if (this.planeMaterial) {
                    this.planeMaterial.uniforms.originalTexture.value = originalTexture;
                    this.planeMaterial.uniforms.depthTexture.value = depthTexture;
                }

                this.updateCanvasSize();
                this.resize(); // Update plane geometry scale
            });
        });
    }

    private updateCanvasSize() {
        this.canvasElement.width = this.originalImageDetails.width;
        this.canvasElement.height = this.originalImageDetails.height;
        this.renderer.setSize(this.canvasElement.width, this.canvasElement.height);
        this.camera.aspect = this.originalImageDetails.aspectRatio;
        this.camera.updateProjectionMatrix();
    }

    private create3dImage() {
        if (this.plane) {
            this.planeGeometry.dispose();
            this.planeMaterial.dispose();
            this.scene.remove(this.plane);
        }

        this.planeGeometry = new THREE.PlaneGeometry(1, 1);
        this.planeMaterial = new THREE.ShaderMaterial({
            uniforms: {
                originalTexture: { value: null },
                depthTexture: { value: null },
                uMouse: { value: new THREE.Vector2(0, 0) },
                uThreshold: { value: new THREE.Vector2(this.settings.xThreshold, this.settings.yThreshold) },
            },
            fragmentShader: `
                precision mediump float;
                uniform sampler2D originalTexture; 
                uniform sampler2D depthTexture; 
                uniform vec2 uMouse;
                uniform vec2 uThreshold;

                varying vec2 vUv;

                vec2 mirrored(vec2 v) {
                    vec2 m = mod(v, 2.0);
                    return mix(m, 2.0 - m, step(1.0, m));
                }

                void main() {
                    vec4 depthMap = texture2D(depthTexture, mirrored(vUv));
                    vec2 fake3d = vec2(vUv.x + (depthMap.r - 0.5) * uMouse.x / uThreshold.x, vUv.y + (depthMap.r - 0.5) * uMouse.y / uThreshold.y);

                    gl_FragColor = texture2D(originalTexture, mirrored(fake3d));
                }
            `,
            vertexShader: `
                varying vec2 vUv; 

                void main() {
                    vUv = uv; 

                    vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
                    gl_Position = projectionMatrix * modelViewPosition; 
                }
            `
        });

        this.plane = new THREE.Mesh(this.planeGeometry, this.planeMaterial);
        this.scene.add(this.plane);
    }

    private resize() {
        const imageAspect = this.originalImageDetails.aspectRatio;
        const canvasAspect = this.canvasElement.width / this.canvasElement.height;

        let scaleX = 1;
        let scaleY = 1;

        if (canvasAspect > imageAspect) {
            scaleX = canvasAspect / imageAspect;
            scaleY = 1;
        } else {
            scaleX = 1;
            scaleY = imageAspect / canvasAspect;
        }

        this.plane.scale.set(scaleX, scaleY, 1);
    }

    private onWindowResize() {
        this.updateCanvasSize();
        this.resize();
    }

    private onMouseMove(event: MouseEvent) {
        const rect = this.canvasElement.getBoundingClientRect();
        this.cursor.x = (event.clientX - rect.left) / this.canvasElement.width - 0.5;
        this.cursor.y = (event.clientY - rect.top) / this.canvasElement.height - 0.5;
    }

    private animate() {
        const clock = new THREE.Clock();
        const tick = () => {
            const elapsedTime = clock.getElapsedTime();
            const parallaxX = this.cursor.x * 0.5;
            const parallaxY = -this.cursor.y * 0.5;

            this.cursor.lerpX += (parallaxX - this.cursor.lerpX) * 0.1;
            this.cursor.lerpY += (parallaxY - this.cursor.lerpY) * 0.1;

            if (this.planeMaterial) {
                this.planeMaterial.uniforms.uMouse.value = new THREE.Vector2(this.cursor.lerpX, this.cursor.lerpY);
            }

            this.renderer.render(this.scene, this.camera);
            requestAnimationFrame(tick);
        };
        tick();
    }
}
