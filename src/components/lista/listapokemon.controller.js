function ListaPokemonController(listaPokemonService, $stateParams) {
  let vm = this;
  vm.titulo = "lista de pokemons";
  vm.address = $stateParams.geracao;
  vm.pokemon = [];

  activate();

  function activate() {
    return listaPokemonService.getListGeneration(vm.address).then((response) => {
      vm.pokemon = response;
      return vm.pokemon;
    });
  }
}

ListaPokemonController.$inject = ["listaPokemonService", "$stateParams"];

export default ListaPokemonController;
