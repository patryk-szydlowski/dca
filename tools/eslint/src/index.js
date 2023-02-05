import { linterConfig } from "./configurations/linter/index.js";
import { javascriptConfig } from "./configurations/javascript/index.js";
import { jsonConfig } from "./configurations/json/index.js";

export const eslintConfig = [linterConfig, ...javascriptConfig, ...jsonConfig];
