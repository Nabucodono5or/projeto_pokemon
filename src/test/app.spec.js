import "angular";
import "angular-mocks";
import "./../app";

describe("App module", () => {
  var $compile;
  var $rootScope;
  var appService;
  var $httpBackend;
  var $componentController;
  var $q;

  beforeEach(() => {
    angular.mock.module("app");
  });

  beforeEach(inject((
    _$compile_,
    _$rootScope_,
    $injector,
    _$componentController_,
    _$q_
  ) => {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    appService = $injector.get("appService");
    $httpBackend = $injector.get("$httpBackend");
    $componentController = _$componentController_;
    $q = _$q_;
  }));

  it("app Service: should make a get request", () => {
    let response;
    appService.get().then((res) => {
      response = res;
    });

    $httpBackend
      .expect("GET", "https://pokeapi.co/api/v2/pokemon/30")
      .respond(200, { pokemon: "Ditto" });

    $httpBackend.flush();

    expect(response).toEqual({ pokemon: "Ditto" });
  });

  it("appController: should be defined ", () => {
    let bindings = {};
    let componentController = $componentController("app", null, bindings);
    expect(componentController).toBeDefined();
  });
});
