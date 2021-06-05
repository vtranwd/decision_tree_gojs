var $ = go.GraphObject.make;

var myDiagram =
	$(go.Diagram, "myDiagramDiv",
		{  // enable ctrl-Z to undo and ctrl-Y to redo
			"undoManager.isEnabled": true
		});

myDiagram.model = new go.Model(
	[	// for each object in this Array, the Diagram creates a Node to represent it
		{ key: "Alpha" },
		{ key: "Beta" },
		{ key: "Gamma" }
	]);