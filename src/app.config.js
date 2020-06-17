function appConfig($urlRouterProvider, $stateProvider) {
  let otherwise = {
    name: "home",
    url: "/",
    component: "home",
  };

  let listaPokemon = {
    name: "listaPokemon",
    url: "/lista",
    params: {
      geracao: null,
    },
    component: "listaPokemon",
  };

  let perfilPokemon = {
    name: "perfil",
    url: "/pokemon",
    params: {
      pokemon: null,
    },
    component: "perfil",
  };

  $urlRouterProvider.otherwise("/");
  $stateProvider.state(listaPokemon);
  $stateProvider.state(perfilPokemon);
  $stateProvider.state(otherwise);
}

appConfig.$inject = ["$urlRouterProvider", "$stateProvider"];

export default appConfig;
