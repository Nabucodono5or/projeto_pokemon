function listaPokemonService($http) {
    let service = {
      getListGeneration: getListGeneration,
    };
  
    return service;
  
    function getListGeneration(address) {
      return $http
        .get(address)
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
  
  listaPokemonService.$inject = ["$http"];
  
  export default listaPokemonService;
  