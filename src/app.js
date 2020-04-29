import angular from "angular";
import appComponent from "./app.component";
import appService from "./app.service";
import componentsModule from "./components/component";

angular
  .module("app", [componentsModule])
  .factory("appService", appService)
  .component("app", appComponent).name;
