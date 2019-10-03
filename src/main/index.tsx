import Shell from "sap/m/Shell";
import ComponentContainer from "sap/ui/core/ComponentContainer";
import Component from "./Component";

sap.ui.getCore().boot();

const container = new Shell({ app: new ComponentContainer({ component: new Component() }) });

container.placeAt("content");
