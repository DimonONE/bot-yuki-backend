const ESBuild = require('esbuild')
const path = require('path')

ESBuild.build({
    outdir: path.resolve(__dirname, '..', '..', 'build'),
    entryPoints: [path.resolve(__dirname, '..', '..', 'src', 'app.ts')],
    tsconfig: path.resolve(__dirname, '..', '..', 'tsconfig.json'),
    bundle: true,
    minify: false,
    platform: 'node'
})
