import { map } from "@/.map";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";
import { icons } from "lucide-react";
import { createElement } from "react";

export const utils = loader({
	baseUrl: "/docs",
	rootDir: "docs",
	source: createMDXSource(map),
	icon(icon) {
		if (!icon) {
			// You may set a default icon
			return;
		}

		if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
	},
});

export const { getPage, getPages, pageTree } = utils;

import type { InferPageType } from "fumadocs-core/source";
export type Page = InferPageType<typeof utils>;
