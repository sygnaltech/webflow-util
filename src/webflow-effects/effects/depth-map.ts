


import { Sa5Effect } from './effect-handler';
import * as THREE from 'three';

export class Sa5DepthMapEffect extends Sa5Effect {
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;
    private material: THREE.ShaderMaterial;
    private mesh: THREE.Mesh;
    private mouse: THREE.Vector2 = new THREE.Vector2(0.5, 0.5);
    private sizes = { width: window.innerWidth, height: window.innerHeight };
    private cursor = { x: 0, y: 0, lerpX: 0, lerpY: 0 };
    private originalImageDetails = { width: 0, height: 0, aspectRatio: 0 };
    private planeGeometry: THREE.PlaneGeometry;
    private planeMaterial: THREE.ShaderMaterial;
    private plane: THREE.Mesh;
    private textureLoader = new THREE.TextureLoader();
    private settings = {
        xThreshold: 20,
        yThreshold: 20,
        originalImagePath: 'https://assets.codepen.io/1616030/wf-memetican_woman_at_the_beach_in_a_bikini._Beautiful_woman_and_b_1cba33a6-be82-4456-9c06-2364efc4ff92.jpg',
        depthImagePath: 'https://assets.codepen.io/1616030/map1.png',
    };

    constructor(elem: HTMLElement, config = {}) {
        super(elem, config); 

    }
    
    init() {
        super.init();

console.log("depth map init"); 

this.setupScene();
this.create3dImage();
this.loadImages();
this.animate();

        this.elem.addEventListener('mousemove', this.onMouseMove.bind(this));
        window.addEventListener('resize', this.onWindowResize.bind(this));
    }

    private setupScene() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, this.sizes.width / this.sizes.height, 0.1, 100);
        this.camera.position.z = 0.7;
        this.scene.add(this.camera);

        const canvas = document.createElement('canvas');
        this.elem.appendChild(canvas);
        this.renderer = new THREE.WebGLRenderer({ canvas });
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    private loadImages() {
        this.textureLoader.load(this.settings.depthImagePath, (depthTexture) => {
            this.textureLoader.load(this.settings.originalImagePath, (originalTexture) => {
                this.originalImageDetails.width = originalTexture.image.width;
                this.originalImageDetails.height = originalTexture.image.height;
                this.originalImageDetails.aspectRatio = originalTexture.image.height / originalTexture.image.width;

                if (this.planeMaterial) {
                    this.planeMaterial.uniforms.originalTexture.value = originalTexture;
                    this.planeMaterial.uniforms.depthTexture.value = depthTexture;
                }

                this.resize();
            });
        });
    }


    private create3dImage() {
        if (this.plane) {
            this.planeGeometry.dispose();
            this.planeMaterial.dispose();
            this.scene.remove(this.plane);
        }

console.log("create3dImage"); 

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
                    vec2 m = mod(v,2.);
                    return mix(m,2.0 - m, step(1.0 ,m));
                }

                void main() {
                    vec4 depthMap = texture2D(depthTexture, mirrored(vUv));
                    vec2 fake3d = vec2(vUv.x + (depthMap.r - 0.5) * uMouse.x / uThreshold.x, vUv.y + (depthMap.r - 0.5) * uMouse.y / uThreshold.y);

                    gl_FragColor = texture2D(originalTexture,mirrored(fake3d));
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
        this.sizes.width = window.innerWidth;
        this.sizes.height = window.innerHeight;
        this.camera.aspect = this.sizes.width / this.sizes.height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    private onWindowResize() {
        this.resize();
    }

    private onMouseMove(event: MouseEvent) {
        this.cursor.x = event.clientX / this.sizes.width - 0.5;
        this.cursor.y = event.clientY / this.sizes.height - 0.5;
    }

    private animate() {
        const clock = new THREE.Clock();
        const tick = () => {
            const elapsedTime = clock.getElapsedTime();
            const parallaxX = this.cursor.x * 0.5;
            const parallaxY = -this.cursor.y * 0.5;

            this.cursor.lerpX += (parallaxX - this.cursor.lerpX) * 0.1;
            this.cursor.lerpY += (parallaxY - this.cursor.lerpY) * 0.1;

            this.planeMaterial.uniforms.uMouse.value = new THREE.Vector2(this.cursor.lerpX, this.cursor.lerpY);
            this.renderer.render(this.scene, this.camera);

            requestAnimationFrame(tick);
        };
        tick();
    }
    
}



