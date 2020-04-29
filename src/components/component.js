import angular from "angular";
import homeModule from "./home/home";
import toolbarModule from "./toobar/toobar";

let componentsModule = angular.module("componentsModule", [
  homeModule,
  toolbarModule
]).name;

export default componentsModule;
