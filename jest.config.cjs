// jest.config.cjs
const { pathsToModuleNameMapper, createDefaultEsmPreset } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.json");
const tsJestTransformCfg = createDefaultEsmPreset().transform;

module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	transform: {
		...tsJestTransformCfg,
	},
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
		prefix: "<rootDir>/",
	}),
	globalSetup: "<rootDir>/tests/setup.ts",
	globalTeardown: "<rootDir>/tests/teardown.ts",
	testMatch: ["<rootDir>/src/modules/**/*.test.ts"],
};
