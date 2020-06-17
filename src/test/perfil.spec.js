import "angular";
import "angular-mocks";
import "./../components/perfil/perfil";

describe("perfilPokemon Module:", () => {
  var $compile;
  var $rootScope;
  var $componentController;
  var $scope;
  var perfilService;

  function services($injector, _$rootScope_) {
    perfilService = $injector.get("perfilService");
    $compile = $injector.get("$compile");
    $componentController = $injector.get("$componentController");
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
  }

  function stateParams($provide) {
    $provide.value("$stateParams", { pokemon: "Ditto" });
  }

  beforeEach(() => {
    angular.mock.module("perfilModule", stateParams);
    inject(services);
  });

  describe("perfilPokemon component:", () => {
    let fakePerfil = { name: "Ditto" };

    beforeEach(() => {
      var $q;
      let name = "Ditto";

      inject(($injector) => {
        $q = $injector.get("$q");
      });

      spyOn(perfilService, "getPokemon")
        .withArgs(name)
        .and.returnValue($q.resolve(fakePerfil));
    });


    describe("When perfil is loaded...", () => {
      let elementApp = angular.element("<perfil></perfil>");
      let componentController;

      beforeEach(() => {
        let bindings = {};

        $compile(elementApp)($scope);
        $rootScope.$digest();

        componentController = $componentController("perfil", null, bindings);
      });

      it("should component perfil be defined", () => {
        expect(componentController).toBeDefined();
      });

      it("should show message 'Componente perfil' in page'", () => {
        expect(elementApp.html()).toContain("Componente perfil");
      });
    });
  });

  describe("perfilService: ", () => {
    var $httpBackend;

    beforeEach(inject(($injector) => {
      $httpBackend = $injector.get("$httpBackend");
    }));

    it("should make a get request", () => {
      let response;
      let pokemon = "ditto";

      perfilService.getPokemon(pokemon).then((res) => {
        response = res;
      });

      $httpBackend
        .expect("GET", "https://pokeapi.co/api/v2/pokemon/" + pokemon)
        .respond(200, { name: "Ditto" });
      $httpBackend.flush();

      expect(response).toEqual({ name: "Ditto" });
    });
  });
});
