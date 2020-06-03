import "angular";
import "angular-mocks";
import "angular-ui-router";
import "./../app";

describe("route pages", () => {
  var $state, $templateCache, $rootScope;

  function services($injector, _$rootScope_) {
    $state = $injector.get("$state");
    $templateCache = $injector.get("$templateCache");
    $rootScope = _$rootScope_;
  }

  beforeEach(() => {
    angular.mock.module("app");
    inject(services);
  });

  describe("when go to '/' ", () => {
    function goTo(url) {
      $rootScope.$apply();
    }

    it("home page is loading with access to main '/' route ", () => {
      goTo("/");

      expect($state.current.name).toBe("home");
    });

    it("any route not existent should be access to main home route", () => {
      goTo("/ola");

      expect($state.current.name).toBe("home");
    });
  });

  describe("when go to '/lista' ", () => {
    function goTo(url, params) {
      if (params) {
        $state.go(url, params);
      } else {
        $state.go(url);
      }

      $rootScope.$apply();
    }

    it("lista Pokemon page is loading with access to main '/lista' route ", () => {
      goTo("listaPokemon");

      expect($state.current.name).toBe("listaPokemon");
    });

    it("should sending url in consequence of the click in the link /lista", () => {
      let address = "https://pokeapi.co/api/v2/pokemon/30";

      goTo("listaPokemon", { geracao: address });

      expect($state.current.name).toBe("listaPokemon");
      expect($state.params.geracao).toEqual(address);
    });
  });
});
