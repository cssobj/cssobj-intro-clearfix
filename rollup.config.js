// rollup.config.js

export default {
  entry: 'src/cssobj-intro-clearfix.js',
  moduleName: 'cssobj_intro_clearfix',
  moduleId: 'cssobj_intro_clearfix',
  targets: [
    { format: 'iife', dest: 'dist/cssobj-intro-clearfix.iife.js' },
    { format: 'amd',  dest: 'dist/cssobj-intro-clearfix.amd.js'  },
    { format: 'cjs',  dest: 'dist/cssobj-intro-clearfix.cjs.js'  },
    { format: 'es',   dest: 'dist/cssobj-intro-clearfix.es.js'   }
  ]
}
