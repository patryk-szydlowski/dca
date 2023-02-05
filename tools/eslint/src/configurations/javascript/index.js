import { baseJavascriptConfig } from "./base.js";
import { prettierConfig } from "./prettier.js";

export const javascriptConfig = [...baseJavascriptConfig, prettierConfig];
