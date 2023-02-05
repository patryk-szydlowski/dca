import { javascriptConfig } from "./configurations/javascript/combined.js";
import { jsonConfig } from "./configurations/json/combined.js";
import { linterConfig } from "./configurations/linter.js";

export const eslintConfig = [linterConfig, ...javascriptConfig, ...jsonConfig];
