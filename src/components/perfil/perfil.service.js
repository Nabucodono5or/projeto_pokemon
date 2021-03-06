function perfilService($http) {
  let service = {
    getPokemon: getPokemon,
  };

  return service;

  function getPokemon(pokemon) {
    return $http
      .get("https://pokeapi.co/api/v2/pokemon/" + pokemon)
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

perfilService.$inject = ["$http"];

export default perfilService;
