import "angular";
import "angular-mocks";
import "./../components/toobar/toobar";

describe("Toolbar Module", () => {
  var $compile;
  var $rootScope;
  var $componentController;

  beforeEach(() => {
    angular.mock.module("toolbarModule");
  });

  beforeEach(inject((_$compile_, _$rootScope_, _$componentController_) => {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $componentController = _$componentController_;
  }));

  it("toolbar component: should contain the property titulo", () => {
    let bindings = {};
    let componentController = $componentController("toolbar", null, bindings);
    expect(componentController.titulo).toEqual("toolbar component");
  });

  it("Should change the property open to true", () => {
    let bindings = {};
    let componentController = $componentController("toolbar", null, bindings);
    componentController.funOpen();
    expect(componentController.open).toBe(true);
  });

  it("Should listening to event click and mantain 'open' to false", () => {
    let element = $compile("<div ng-click='funOpen()'></div>")($rootScope);

    $rootScope.open = false;
    $rootScope.funOpen = () => {
      $rootScope.open = !$rootScope.open;
    };

    element.triggerHandler("click");
    element.triggerHandler("click");
    $rootScope.$digest();

    expect($rootScope.open).toEqual(false);
  });

  it("Should change the class to 'open' in consequence of click", () => {
    let element = $compile("<toolbar></toolbar>")($rootScope);
    let button = element.find("div");
    let links = element.find("ul");

    button.triggerHandler("click");
    expect(links.hasClass("open")).toBe(true);
  });
});
