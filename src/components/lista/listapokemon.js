import angular from "angular";
import listaPokemonComponent from "./listapokemon.component";
import listaPokemonService from './listapokemon.service';

let listaPokemonModule = angular
  .module("listaPokemonModule", [])
  .factory("listaPokemonService", listaPokemonService)
  .component("listaPokemon", listaPokemonComponent).name;

export default listaPokemonModule;
