import arrays from "eslint-plugin-array-func";
import comments from "eslint-plugin-eslint-comments";
import promise from "eslint-plugin-promise";
import regexp from "eslint-plugin-regexp";
import unicorn from "eslint-plugin-unicorn";

export const standardsConfig = {
	files: ["**/*.js", "**/*.ts"],
	plugins: {
		promise,
		regexp,
		unicorn,
		"array-func": arrays,
		"eslint-comments": comments,
	},
	rules: {
		...promise.configs["recommended"]?.rules,
		...regexp.configs["all"]?.rules,
		...unicorn.configs["all"]?.rules,
		...arrays.configs["all"]?.rules,
		...comments.configs["recommended"]?.rules,

		"eslint-comments/require-description": "error",
	},
};
