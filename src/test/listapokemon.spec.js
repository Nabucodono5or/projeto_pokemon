import "angular";
import "angular-mocks";
import "./../components/lista/listapokemon";

describe("ListaPokemon component:", () => {
  var $compile;
  var $rootScope;
  var listaPokemonService;
  var $httpBackend;
  var $componentController;
  var $q;

  function services($injector, _$rootScope_) {
    $compile = $injector.get("$compile");
    $httpBackend = $injector.get("$httpBackend");
    $componentController = $injector.get("$componentController");
    listaPokemonService = $injector.get("listaPokemonService");
    $rootScope = _$rootScope_;
    $q = $injector.get("$q");
  }

  beforeEach(() => {
    angular.mock.module("listaPokemonModule");
    inject(services);
  });

  describe("listaPokemon component:", () => {
    beforeEach(() => {
      let url = "";

      spyOn(listaPokemonService, "get")
        .withArgs(url)
        .and.returnValue($q.resolve(["algo"]));
    });

    it("should show message 'lista de pokemon' in page'", () => {
      var elementApp = $compile("<lista-pokemon></lista-pokemon>")($rootScope);
      $rootScope.$digest();
      expect(elementApp.html()).toContain("lista de pokemon");
    });

    it("shold have pokemon loading", () => {
      let bindings = {};
      let componentController = $componentController("listaPokemon", null, bindings);
      expect(componentController.pokemon).toEqual([]);
    });
  });
});
