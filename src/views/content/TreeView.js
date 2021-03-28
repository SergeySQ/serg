import { View } from "dhx-optimus";
export class TreeView extends View {
	init() {
		return (tree = new dhx.Tree("tree_container", {
			checkbox: true,
		}));
	}
}
