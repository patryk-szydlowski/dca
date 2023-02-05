import { ESLint, Linter } from "eslint";

export type ESLintPlugin<TRules extends string> = Omit<ESLint.Plugin, "configs"> & {
	configs: Record<TRules, Linter.HasRules>;
};
