import angular from "angular";
import perfilComponent from "./perfil.component";

let perfilModule = angular
  .module("perfilModule", [])
  .component("perfil", perfilComponent).name;

export default perfilModule;
