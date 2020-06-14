function ListaPokemonController(listaPokemonService, $stateParams) {
  let vm = this;
  vm.titulo = "lista de pokemons";
  vm.address = $stateParams.geracao;
  vm.pokemon = [];
  vm.upperCaseString = upperCaseString;

  activate();

  function activate() {
    return listaPokemonService
      .getListGeneration(vm.address)
      .then((response) => {
        vm.pokemon = response.results;
        return vm.pokemon;
      });
  }

  function upperCaseString(string) {
    return string.toUpperCase();
  }
}

ListaPokemonController.$inject = ["listaPokemonService", "$stateParams"];

export default ListaPokemonController;
