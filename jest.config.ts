import type { Config } from '@jest/types';

// Global
// const baseDir = '<rootDir>/src';
// const baseTestDir = '<rootDir>/src/__tests__';

// Specific to test a path
const baseDir = '<rootDir>/src/app/doubles';
const baseTestDir = '<rootDir>/src/__tests__/doubles';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  collectCoverageFrom: [
    `${baseDir}/**/*.ts`,
    `!${baseDir}/**/*.d.ts`,
    `!${baseDir}/index.ts`,
  ],
  testMatch: [`${baseTestDir}/**/*.test.ts`, `${baseTestDir}/**/*.spec.ts`],
};

export default config;
