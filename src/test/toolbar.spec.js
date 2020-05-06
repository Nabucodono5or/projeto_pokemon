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

  it("toolbar component: should render the component", () => {
    let element = $compile("<toolbar></toolbar>")($rootScope);
    $rootScope.$digest();

    expect(element.html()).toContain("toolbar component");
  });

  it("toolbar component: should contain the property titulo", () => {
    let bindings = {};
    let componentController = $componentController("toolbar", null, bindings);
    expect(componentController.titulo).toEqual("toolbar component");
  });

  it("toolbar component: should change the property open", () => {
  });

  it("toolbar directive: should change the property open in consequence about click", () => {
    let element = $compile("<div toolbar-directive info='openFunc()'></div>")($rootScope);
    
    $rootScope.open = false;
    $rootScope.openFunc = () => {
      $rootScope.open = !$rootScope.open;
    };

    element.triggerHandler("click");
    $rootScope.$digest();

    expect($rootScope.open).toEqual(true);
  });
});
