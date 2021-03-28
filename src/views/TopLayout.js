import { View } from "dhx-optimus";

import { ToolbarView } from "./ToolbarView";
import { GridView } from "./content/GridView";
import { TreeView } from "./content/TreeView";

export class TopLayout extends View {
	init() {
		return (this.layout = new dhx.Layout(null, {
			// rows: [
			// 	{
			// 		type:"wide",
			// 		cols:[
			// 	{
			// 		id: "toolbar",
			// 		height: "content",
			// 		init: cell => this.show(cell, ToolbarView),
			// 	},
			// 	{
			// 		id: "content",
			// 	},
			// 		]
			// 	}
			// ],
			type: "line",
			rows: [
				{
					id: "toolbar",
					header: "Header",
					collapsable: true,
					height: "90px",
					init: cell => this.show(cell, ToolbarView),
				},
				{
					cols: [
						{
							id: "tree",
							header: "tree",
							width: "200px",
							resizable: true,
							collapsable: true,
							init: cell => this.show(cell, TreeView),
						},
						{
							id: "content",
						},
					],
				},
			],
		}));
	}

	ready() {
		this.observe(
			state => state.active,
			active => {
				switch (active) {
					case "first":
						this.show(this.layout.getCell("content"), GridView, {
							dataCollection: this.params.persons,
						});
						break;
				}
			}
		);
	}
}
