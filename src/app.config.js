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
      geracao: null
    },
    component: "listaPokemon",
  };

  $urlRouterProvider.otherwise("/");
  $stateProvider.state(listaPokemon);
  $stateProvider.state(otherwise);
}

appConfig.$inject = ["$urlRouterProvider", "$stateProvider"];

export default appConfig;
