/* Cross-platform esbuild runner that expands globs for Windows shells */
const path = require('path');
const fs = require('fs');
const esbuild = require('esbuild');

function listTsFiles(dir) {
  const out = [];
  const stack = [dir];
  while (stack.length) {
    const d = stack.pop();
    const entries = fs.readdirSync(d, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(d, e.name);
      if (e.isDirectory()) {
        stack.push(full);
      } else if (e.isFile()) {
        if (full.endsWith('.ts') && !full.endsWith('.d.ts')) {
          out.push(full);
        }
      }
    }
  }
  return out;
}

async function run() {
  const watch = process.argv.includes('--watch');
  const srcDir = path.resolve(__dirname, '..', 'src');
  const entryPoints = listTsFiles(srcDir);

  if (entryPoints.length === 0) {
    console.error('No TypeScript entry points found under src/');
    process.exit(1);
  }

  console.log(`[build] Entrypoints: ${entryPoints.length}`);

  const commonOptions = {
    entryPoints,
    bundle: true,
    sourcemap: true,
    outdir: path.resolve(__dirname, '..', 'dist'),
    target: 'es2020',
    external: ['custom-typings/*'],
    logLevel: 'info',
  };

  await esbuild.build({
    ...commonOptions,
    watch: watch ? {
      onRebuild(error) {
        if (error) console.error('[build] Rebuild failed:', error);
        else console.log('[build] Rebuild succeeded');
      }
    } : false,
  });

  if (watch) console.log('[build] Watching for changes...');
  else console.log('[build] Build complete');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
