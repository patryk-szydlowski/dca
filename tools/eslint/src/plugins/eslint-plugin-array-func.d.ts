// eslint-disable-next-line unicorn/prevent-abbreviations -- Follow package naming convention
declare module "eslint-plugin-array-func" {
	import { ESLint, Linter } from "eslint";

	const plugin: Omit<ESLint.Plugin, "configs"> & {
		configs: Record<string, Linter.HasRules>;
	};

	export default plugin;
}
