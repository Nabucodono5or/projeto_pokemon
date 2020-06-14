import angular from "angular";
import perfilComponent from "./perfil.component";
import perfilService from './perfil.service';

let perfilModule = angular
  .module("perfilModule", [])
  .factory("perfilService", perfilService)
  .component("perfil", perfilComponent).name;

export default perfilModule;
