import { type DocsLayoutProps } from "fumadocs-ui/layout";
import { type HomeLayoutProps } from "fumadocs-ui/home-layout";
import { pageTree } from "@/app/source";

// shared configuration
export const baseOptions: HomeLayoutProps = {
	githubUrl: "https://github.com/Coffee-Hub-Club/docs",
	nav: {
		title: "Coffee Host 官方文檔",
	},
	links: [
		{
			text: "Documentation",
			url: "/docs",
			active: "nested-url",
		},
	],
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
	...baseOptions,
	tree: pageTree,
};
