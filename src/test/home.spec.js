import "angular";
import "angular-mocks";
import "./../components/home/home";

describe(" Home module ", () => {
  var $compile;
  var $rootScope;
  var $componentController;

  beforeEach(() => {
    angular.mock.module("homeModule");
  });

  beforeEach(inject((_$compile_, _$rootScope_, _$componentController_) => {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $componentController = _$componentController_;
  }));

  it("Home component: should show component in page", () => {
    // let element = $compile("<home></home>")($rootScope);
    // $rootScope.$digest();
    // expect(element.html()).toContain("segundo componente");
  });

  it("home controller: should be defined and have propierty titulo defined", () => {
    let bindings = {};
    let componentController = $componentController("home", null, bindings);
    expect(componentController).toBeDefined();
    expect(componentController.titulo).toEqual("segundo componente");
  });
});
