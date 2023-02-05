import { baseJavascriptConfig } from "./base.js";
import { importsConfig } from "./imports.js";
import { prettierConfig } from "./prettier.js";
import { typescriptConfig } from "./typescript.js";

export const javascriptConfig = [
	...baseJavascriptConfig,
	...typescriptConfig,
	importsConfig,
	prettierConfig,
];
