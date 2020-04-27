import "angular";
import "angular-mocks";
import "./../app";
import apiService from "../../../test-with-karma/src/apiService.service";

describe("App module", () => {
  var $compile;
  var $rootScope;
  var appService;
  var $httpBackend;

  beforeEach(() => {
    angular.mock.module("app");
  });

  beforeEach(inject((_$compile_, _$rootScope_, $injector) => {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    appService = $injector.get('appService');
    $httpBackend = $injector.get('$httpBackend');
  }));

  it("teste inicial: should show message 'Olá mundo' in page'", () => {
    var elementApp = $compile("<app></app>")($rootScope);
    $rootScope.$digest();
    expect(elementApp.html()).toContain("Olá mundo");
  });

  it('app Service: should make a get request', () => {

    let response;
    appService.get().then((res) => {
      response = res;
    });

    $httpBackend.expect("GET","https://pokeapi.co/api/v2/pokemon/30").respond(200, { pokemon : "Ditto" })

    $httpBackend.flush();

    expect(response).toEqual({ pokemon : "Ditto" });
  })
});
