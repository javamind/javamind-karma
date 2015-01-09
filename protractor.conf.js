//To see the reference config file see https://github.com/angular/protractor/blob/master/docs/referenceConf.js
exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./test/e2e/*.spec.js'],
    multiCapabilities: [{
        browserName: 'firefox'
    }, {
        browserName: 'chrome'
    }]
};