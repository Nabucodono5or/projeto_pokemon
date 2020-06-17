import angular from "angular";
import homeModule from "./home/home";
import toolbarModule from "./toobar/toobar";
import listapokemonModule from './lista/listapokemon';
import perfilPokemon from './perfil/perfil';

let componentsModule = angular.module("componentsModule", [
  homeModule,
  toolbarModule,
  listapokemonModule,
  perfilPokemon
]).name;

export default componentsModule;
