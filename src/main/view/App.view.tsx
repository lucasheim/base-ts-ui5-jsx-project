import Application from "sap/m/App";
import JSView from "sap/ui/core/mvc/JSView";
import Controller from "sap/ui/core/mvc/Controller";

export default class App extends JSView {
  
  public createContent(controller: Controller) {
    return new Application({ id: "app" });
  }
}
