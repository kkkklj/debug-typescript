const esbuildConig = () => require('esbuild').buildSync({
  entryPoints: ['ts/t3.ts'],
  bundle: true,
  minify:false,
  target:['chrome58'],
  outfile: 'dist/js/t3.js',
})

esbuildConig();