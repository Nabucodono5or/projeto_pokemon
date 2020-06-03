import "angular";
import "angular-mocks";
import "./../components/lista/listapokemon";

describe("ListaPokemon component:", () => {
  var $compile;
  var $rootScope;
  var $componentController;
  var listaPokemonService;

  function services($injector, _$rootScope_) {
    listaPokemonService = $injector.get("listaPokemonService");
    $compile = $injector.get("$compile");
    $componentController = $injector.get("$componentController");
    $rootScope = _$rootScope_;
  }

  function stateParams($provide) {
    $provide.value("$stateParams", { geracao: "" });
  }

  beforeEach(() => {
    angular.mock.module("listaPokemonModule", stateParams);
    inject(services);
  });

  describe("listaPokemon component:", () => {
    beforeEach(() => {
      var $q;
      let url = "";

      inject(($injector) => {
        $q = $injector.get("$q");
      });

      spyOn(listaPokemonService, "getListGeneration")
        .withArgs(url)
        .and.returnValue($q.resolve(["algo"]));
    });

    describe("When lista is loaded...", () => {
      it("should show message 'lista de pokemon' in page'", () => {
        var elementApp = $compile("<lista-pokemon></lista-pokemon>")(
          $rootScope
        );
        $rootScope.$digest();
        expect(elementApp.html()).toContain("lista de pokemon");
      });

      it("shold have pokemon loading in controller", () => {
        let bindings = {};
        let componentController = $componentController(
          "listaPokemon",
          null,
          bindings
        );
        expect(componentController.pokemon).toEqual([]);
      });
    });
  });

  describe("listaPokemonService: ", () => {
    var $httpBackend;

    beforeEach(inject(($injector) => {
      $httpBackend = $injector.get("$httpBackend");
    }));

    it("should make a get request", () => {
      let response;
      let url = "https://pokeapi.co/api/v2/pokemon/30";
      listaPokemonService.getListGeneration(url).then((res) => {
        response = res;
      });

      $httpBackend
        .expect("GET", "https://pokeapi.co/api/v2/pokemon/30")
        .respond(200, { name: "Ditto" });
      $httpBackend.flush();

      expect(response).toEqual({ name: "Ditto" });
    });
  });
});
