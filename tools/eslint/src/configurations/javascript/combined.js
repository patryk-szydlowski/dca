import { baseJavascriptConfig } from "./base.js";
import { functionalConfig } from "./conventions.js";
import { importsConfig } from "./imports.js";
import { prettierConfig } from "./prettier.js";
import { standardsConfig } from "./standards.js";
import { typescriptConfig } from "./typescript.js";

export const javascriptConfig = [
	...baseJavascriptConfig,
	...typescriptConfig,
	importsConfig,
	standardsConfig,
	functionalConfig,
	prettierConfig,
];
