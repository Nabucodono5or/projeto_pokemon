import "angular";
import "angular-mocks";
import "./../app";

describe("App module", () => {
  var $rootScope;
  var $componentController;

  function services(_$rootScope_, _$componentController_) {
    $rootScope = _$rootScope_;
    $componentController = _$componentController_;
  }

  beforeEach(() => {
    angular.mock.module("app");
    inject(services);
  });

  // describe("When app service is access...", () => {
  //   var appService;
  //   var $httpBackend;

  //   beforeEach(inject(($injector) => {
  //     appService = $injector.get("appService");
  //     $httpBackend = $injector.get("$httpBackend");
  //   }));

  //   it("app Service should make a get request", () => {
  //     let response;
  //     appService.get().then((res) => {
  //       response = res;
  //     });

  //     $httpBackend
  //       .expect("GET", "https://pokeapi.co/api/v2/pokemon/30")
  //       .respond(200, { pokemon: "Ditto" });

  //     $httpBackend.flush();

  //     expect(response).toEqual({ pokemon: "Ditto" });
  //   });
  // });

  describe("When app controller is load...", () => {
    it("appController: should be defined ", () => {
      let bindings = {};
      let componentController = $componentController("app", null, bindings);
      expect(componentController).toBeDefined();
    });
  });
});
