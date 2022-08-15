/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  testEnvironment: "node",
  collectCoverage: true,
  collectCoverageFrom: ["**/*.ts", "!jest.config.ts"],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};

export default config;
