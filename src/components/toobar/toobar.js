import angular from "angular";
import toolbarComponent from "./toolbar.component";
import toolbarDirective from "./toolbar.directive";

let toolbarModule = angular
  .module("toolbarModule", [])
  .directive("toolbarDirective", toolbarDirective)
  .component("toolbar", toolbarComponent).name;

export default toolbarModule;
