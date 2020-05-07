import angular from "angular";
import appComponent from "./app.component";
import appService from "./app.service";
import componentsModule from "./components/component";
import config from "./app.config";
import uiRouter from "angular-ui-router";

angular
  .module("app", [uiRouter, componentsModule])
  .config(config)
  .factory("appService", appService)
  .component("app", appComponent).name;
