module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{js,vue}',
        'src/utils.js',
        '!**/node_modules/**',
        '!src/plugins/*',
        '!src/lang/*',
        '!src/*.js',
    ],
    transformIgnorePatterns: ['node_modules/(?!vue2-google-maps)'],
};
