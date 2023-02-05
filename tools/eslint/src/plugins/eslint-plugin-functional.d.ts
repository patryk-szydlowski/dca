declare module "eslint-plugin-functional" {
	import { ESLint, Linter } from "eslint";

	const plugin: Omit<ESLint.Plugin, "configs"> & {
		configs: Record<string, Linter.HasRules>;
	};

	export default plugin;
}
