import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

export const typescriptConfig = [
	{
		files: ["**/*.js", "**/*.ts"],
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				project: ["**/tsconfig.json"],
			},
		},
		plugins: {
			"@typescript-eslint": typescript,
		},
		rules: {
			...typescript.configs["recommended"]?.rules,
			...typescript.configs["recommended-requiring-type-checking"]?.rules,
			...typescript.configs["strict"]?.rules,
		},
	},
	{
		files: ["**/*.d.ts"],
		rules: {
			"init-declarations": "off",
		},
	},
];
