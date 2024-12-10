export const basic_config = {
    specs: [
        '../features/**/*.feature'
    ],
    exclude: [],
    maxInstances: 1,
//    logLevel: 'info',
    logLevel: 'error',
    bail: 0,
//    bail: 0,
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: ['cucumberjs-json'],
    cucumberOpts: {
        require: ['./step-definitions/steps.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },

}
