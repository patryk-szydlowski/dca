declare module "eslint-plugin-import" {
	import { ESLintPlugin } from "./plugin";

	const plugin: ESLintPlugin<"recommended" | "typescript">;

	export default plugin;
}
