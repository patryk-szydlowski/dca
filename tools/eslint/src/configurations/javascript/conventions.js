// eslint-disable-next-line import/no-unresolved -- Not sure why this plugin can't be resolved
import functional from "eslint-plugin-functional";

export const functionalConfig = {
	files: ["**/*.js", "**/*.ts"],
	plugins: {
		functional,
	},
	rules: {
		...functional.configs["recommended"]?.rules,
		...functional.configs["external-typescript-recommended"]?.rules,
		...functional.configs["stylistic"]?.rules,

		"func-style": ["error", "declaration", { allowArrowFunctions: true }],
	},
};
