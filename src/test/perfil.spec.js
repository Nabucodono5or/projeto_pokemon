import "angular";
import "angular-mocks";
import "./../components/perfil/perfil";

describe("perfilPokemon Module:", () => {
  var $compile;
  var $rootScope;
  var $componentController;
  var $scope;

  function services($injector, _$rootScope_) {
    $compile = $injector.get("$compile");
    $componentController = $injector.get("$componentController");
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
  }

  beforeEach(() => {
    angular.mock.module("perfilModule");
    inject(services);
  });

  describe("perfilPokemon component:", () => {
    let fakePerfil = { name: "Ditto" };

    describe("When perfil is loaded...", () => {
      let elementApp = angular.element("<perfil></perfil>");
      let componentController;

      beforeEach(() => {
        let bindings = {};

        $compile(elementApp)($scope);
        $rootScope.$digest();

        componentController = $componentController(
          "perfil",
          null,
          bindings
        );
      });

      it("should show message 'Componente perfil' in page'", () => {
        expect(componentController).toBeDefined();
      });

      it("should show message 'Componente perfil' in page'", () => {
        expect(elementApp.html()).toContain("Componente perfil");
      });
    });
  });

//   describe("perfilService: ", () => {
//     var $httpBackend;

//     beforeEach(inject(($injector) => {
//       $httpBackend = $injector.get("$httpBackend");
//     }));

//     it("should make a get request", () => {
//       let response;
//       let url = "https://pokeapi.co/api/v2/pokemon/30";
//       listaPokemonService.getListGeneration(url).then((res) => {
//         response = res;
//       });

//       $httpBackend
//         .expect("GET", "https://pokeapi.co/api/v2/pokemon/30")
//         .respond(200, { name: "Ditto" });
//       $httpBackend.flush();

//       expect(response).toEqual({ name: "Ditto" });
//     });
//   });
});
