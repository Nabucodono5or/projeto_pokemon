import "angular";
import "angular-mocks";
import "./../app";

describe("App module", () => {
  var $compile;
  var $rootScope;

  beforeEach(() => {
    angular.mock.module("app");
  });

  beforeEach(inject((_$compile_, _$rootScope_) => {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it("teste inicial: should show message 'Olá mundo' in page'", () => {
    var elementApp = $compile("<app></app>")($rootScope);
    $rootScope.$digest();
    expect(elementApp.html()).toContain("Olá mundo");
  });
});
