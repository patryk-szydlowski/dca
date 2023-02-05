import importPlugin from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export const importsConfig = {
	files: ["**/*.js", "**/*.ts"],
	plugins: {
		import: importPlugin,
		"simple-import-sort": simpleImportSort,
	},
	rules: {
		...importPlugin.configs["recommended"]?.rules,
		...importPlugin.configs["typescript"]?.rules,

		// Restrict
		"import/no-useless-path-segments": ["error", { noUselessIndex: true }],
		"import/no-empty-named-blocks": "error",
		"import/no-extraneous-dependencies": [
			"error",
			{ devDependencies: ["**/*.config.js", "**/*.config.ts", "**/*.test.ts"] },
		],
		"import/no-mutable-exports": "error",
		"import/no-named-as-default-member": "error",
		"import/no-named-as-default": "error",
		"import/no-named-default": "error",

		// Sort imports
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
		"import/first": "error",
		"import/newline-after-import": "error",
		"import/no-duplicates": "error",
	},
	settings: {
		"import/extensions": ["**/*.js", "**/*.ts"],
		"import/resolver": { typescript: {} },
	},
};
