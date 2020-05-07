function appConfig($urlRouterProvider, $stateProvider) {
  let otherwise = {
    name: "home",
    url: "/",
    component: "home",
  };

  $urlRouterProvider.otherwise("/");
  $stateProvider.state(otherwise);
}

appConfig.$inject = ["$urlRouterProvider", "$stateProvider"];

export default appConfig;
