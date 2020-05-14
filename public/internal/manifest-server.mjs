// This file is generated by Sapper — do not edit it!
import * as route_0 from "../../src/routes/blog/index.json.js";
import * as route_1 from "../../src/routes/blog/[slug].json.js";
import component_0 from "../../src/routes/index.svelte";
import component_1 from "../../src/routes/about.svelte";
import component_2, { preload as preload_2 } from "../../src/routes/blog/index.svelte";
import component_3, { preload as preload_3 } from "../../src/routes/blog/[slug].svelte";
import root from "../../src/routes/_layout.svelte";
import error from "../../src/routes/_error.svelte";

const d = decodeURIComponent;

export const manifest = {
	server_routes: [
		{
			// blog/index.json.js
			pattern: /^\/blog\.json$/,
			handlers: route_0,
			params: () => ({})
		},

		{
			// blog/[slug].json.js
			pattern: /^\/blog\/([^\/]+?)\.json$/,
			handlers: route_1,
			params: match => ({ slug: d(match[1]) })
		}
	],

	pages: [
		{
			// index.svelte
			pattern: /^\/$/,
			parts: [
				{ name: "index", file: "index.svelte", component: component_0 }
			]
		},

		{
			// about.svelte
			pattern: /^\/about\/?$/,
			parts: [
				{ name: "about", file: "about.svelte", component: component_1 }
			]
		},

		{
			// blog/index.svelte
			pattern: /^\/blog\/?$/,
			parts: [
				{ name: "blog", file: "blog/index.svelte", component: component_2, preload: preload_2 }
			]
		},

		{
			// blog/[slug].svelte
			pattern: /^\/blog\/([^\/]+?)\/?$/,
			parts: [
				null,
				{ name: "blog_$slug", file: "blog/[slug].svelte", component: component_3, preload: preload_3, params: match => ({ slug: d(match[1]) }) }
			]
		}
	],

	root,
	root_preload: () => {},
	error
};

export const build_dir = "__sapper__/build";

export const src_dir = "src";

export const dev = false;