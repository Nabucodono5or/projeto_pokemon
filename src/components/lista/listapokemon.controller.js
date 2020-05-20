function ListaPokemonController(listaPokemonService) {
  let vm = this;
  vm.titulo = "lista de pokemons";
  vm.address = "";
  vm.pokemon = [];

  activate();

  function activate() {
    return listaPokemonService.getListGeneration(vm.address).then((response) => {
      vm.pokemon = response;
      return vm.pokemon;
    });
  }
}

ListaPokemonController.$inject = ["listaPokemonService"];

export default ListaPokemonController;
