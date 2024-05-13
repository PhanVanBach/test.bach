/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^dayjs$': '<rootDir>/node_modules/dayjs'
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom']
};
