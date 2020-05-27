import angular from "angular";
import homeModule from "./home/home";
import toolbarModule from "./toobar/toobar";
import listapokemonModule from './lista/listapokemon';

let componentsModule = angular.module("componentsModule", [
  homeModule,
  toolbarModule,
  listapokemonModule
]).name;

export default componentsModule;
