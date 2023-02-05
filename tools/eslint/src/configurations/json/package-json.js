export const packageJsonConfig = {
	files: ["**/package.json"],
	rules: {
		"jsonc/sort-keys": [
			"error",
			{
				order: [
					"name",
					"description",
					"version",
					"private",
					"type",
					"packageManager",
					"engines",
					"main",
					"types",
					"exports",
					"scripts",
					"dependencies",
					"devDependencies",
					"pnpm",
				],
				pathPattern: "^$",
			},
			{ order: ["pnpm", "npm", "yarn"], pathPattern: "^engines$" },
			{
				order: [
					{ keyPattern: "^dev.*$" },
					{ keyPattern: "^build.*$" },
					{ keyPattern: "^preview.*$" },
					{ keyPattern: "^test.*$" },
					{ keyPattern: "^lint.*$" },
					{ keyPattern: ".*" },
				],
				pathPattern: "^scripts$",
			},
			{ order: { type: "asc" }, pathPattern: ".*" },
		],
	},
};
