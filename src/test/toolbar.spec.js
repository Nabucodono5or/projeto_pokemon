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

  describe("When load toolbar...", () => {
    it("toolbar component should contain the property titulo", () => {
      let bindings = {};
      let componentController = $componentController("toolbar", null, bindings);
      expect(componentController.titulo).toEqual("toolbar component");
    });

    it("Should list all menu options from an array in controller", () => {
      let bindings = {};
      let componentController = $componentController("toolbar", null, bindings);
      expect(componentController.listUrl).not.toEqual([]);
      expect(componentController.listUrl.length).toBeGreaterThan(0);
    });  
  });

  describe("When click in the menu humburguer...", () => {
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

  describe("When click in the options menu...", () => {
    it("Should close the menu when click an option of the menu", () => {
      let element = $compile("<toolbar></toolbar>")($rootScope);
      let button = element.find("div");
      let links = element.find("ul");
      let link = element.find("li");

      $rootScope.$digest();
      console.log(links);

      button.triggerHandler("click");
      link.triggerHandler("click");
      $rootScope.$digest();

      expect(links.hasClass("open")).toBe(false);
    });
  });
});
