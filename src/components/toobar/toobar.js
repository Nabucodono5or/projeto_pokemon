import angular from "angular";
import toolbarComponent from "./toolbar.component";

let toolbarModule = angular
  .module("toolbarModule", [])
  .component("toolbar", toolbarComponent).name;

export default toolbarModule;
