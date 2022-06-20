// https://blog.51cto.com/u_15098004/2611169

module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  testMatch: ['**/__tests__/*.(js|jsx|ts|tsx)'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json']
}
