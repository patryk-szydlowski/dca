import jsonc from "eslint-plugin-jsonc";

export const baseJsonConfig = {
	files: ["**/*.json"],
	languageOptions: {
		parser: jsonc,
	},
	plugins: {
		jsonc,
	},
	rules: {
		...jsonc.configs["recommended-with-json"].rules,
		...jsonc.configs.prettier.rules,
	},
};
