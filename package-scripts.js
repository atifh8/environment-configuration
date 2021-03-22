const {
  series, concurrent
} = require('nps-utils')
module.exports = {
  scripts: {
    // ng: 'ng',
    // default: 'ng serve',
    // build: 'ng build',
    // test: 'ng test',
    // lint: 'ng lint',
    // e2E: 'ng e2e',
    // build: 'ng build',
    ng: {
      serve: 'ng serve',
      build: 'ng build',
      lint: 'ng lint',
      test: 'ng test',
      e2e: 'ng e2e'
    },
    copy: {
      assets: 'cpx "src/assets/config/*.*" dist/myapp/config/',
    },
    build: {
      project: series(
        'nps "ng.build"',
        'nps copy.assets'
      )
    }
  }

};
