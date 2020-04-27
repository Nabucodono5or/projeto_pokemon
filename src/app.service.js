function appService($http) {
  let service = {
    get: get,
  };

  return service;

  function get() {
    return $http
      .get("https://pokeapi.co/api/v2/pokemon/30")
      .then(apiCallComplete)
      .catch(apiCallErrorHandling);
  }

  function apiCallComplete(response) {
    return response.data;
  }

  function apiCallErrorHandling(error) {
    console.log("erro da api");
  }
}

appService.$inject = ["$http"];

export default appService;
