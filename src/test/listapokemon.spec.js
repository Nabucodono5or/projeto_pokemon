import "angular";
import "angular-mocks";
import "./../components/lista/listapokemon";

describe("ListaPokemon Module:", () => {
  var $compile;
  var $rootScope;
  var $componentController;
  var listaPokemonService;
  var $scope;

  function services($injector, _$rootScope_) {
    listaPokemonService = $injector.get("listaPokemonService");
    $compile = $injector.get("$compile");
    $componentController = $injector.get("$componentController");
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
  }

  function stateParams($provide) {
    $provide.value("$stateParams", { geracao: "" });
  }

  beforeEach(() => {
    angular.mock.module("listaPokemonModule", stateParams);
    inject(services);
  });

  describe("listaPokemon component:", () => {
    let fakeList = [{ name: "Bulbasaur" }, { name: "Ditto" }];

    beforeEach(() => {
      var $q;
      let url = "";

      inject(($injector) => {
        $q = $injector.get("$q");
      });

      spyOn(listaPokemonService, "getListGeneration")
        .withArgs(url)
        .and.returnValue(
          $q.resolve(fakeList)
        );
    });

    describe("When lista is loaded...", () => {
      let elementApp = angular.element("<lista-pokemon></lista-pokemon>");
      let componentController;

      beforeEach(() => {
        let bindings = {};

        $compile(elementApp)($scope);
        $rootScope.$digest();

        componentController = $componentController(
          "listaPokemon",
          null,
          bindings
        );
      });

      it("should show message 'lista de pokemon' in page'", () => {
        expect(elementApp.html()).toContain("lista de pokemon");
      });

      it("should have pokemon loading in controller", () => {
        expect(componentController.pokemon).toEqual([]);
      });

      it("should list every pokemon");
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
