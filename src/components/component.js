import angular from "angular";
import homeModule from "./home/home";

let componentsModule = angular.module("componentsModule", [homeModule]).name;

export default componentsModule;
