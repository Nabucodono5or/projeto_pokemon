function PerfilController(perfilService, $stateParams) {
  let vm = this;
  vm.titulo = "Componente perfil";
  vm.pokemonName = $stateParams.pokemon;
  vm.pokemon = {};

  activate();

  function activate() {
    return perfilService.getPokemon(vm.pokemonName).then((response) => {
      vm.pokemon = response;
      console.log(vm.pokemon);
      return vm.pokemon;
    });
  }
}

PerfilController.$inject = ["perfilService", "$stateParams"];

export default PerfilController;
