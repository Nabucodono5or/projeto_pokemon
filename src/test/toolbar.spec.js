import "angular";
import "angular-mocks";
import "./../components/toobar/toobar";

describe("Toolbar Module", () => {
  var $compile;
  var $rootScope;
  var $componentController;
  var $scope;

  function services(_$compile_, _$rootScope_, _$componentController_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $componentController = _$componentController_;
    $scope = $rootScope.$new();
  }

  beforeEach(() => {
    angular.mock.module("toolbarModule");
    inject(services);
  });

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
    let element;

    beforeEach(() => {
      element = angular.element("<toolbar></toolbar>");
      $compile(element)($scope);
    });

    it("Should change the property open to true", () => {
      let bindings = {};
      let componentController = $componentController("toolbar", null, bindings);
      componentController.funOpen();
      expect(componentController.open).toBe(true);
    });

    it("Should listening to event click and mantain 'open' to false", () => {
      let div = $compile("<div ng-click='funOpen()'></div>")($scope);

      $scope.open = false;
      $scope.funOpen = () => {
        $scope.open = !$scope.open;
      };

      div.triggerHandler("click");
      div.triggerHandler("click");
      $rootScope.$digest();

      expect($scope.open).toEqual(false);
    });

    it("Should change the class to 'open' in consequence of click", () => {
      let button = element.find("div");
      let links = element.find("ul");

      button.triggerHandler("click");
      expect(links.hasClass("open")).toBe(true);
    });

    it("Should show list of the continents pokemon", () => {
      let button = element.find("div");
      let list;

      button.triggerHandler("click");
      list = element.find("li");

      expect(list.eq(0).text()).toContain("Kanto");
    });
  });

  describe("When click in the options menu...", () => {
    let element;
    beforeEach(() => {
      $scope.open = false;
      $scope.funOpen = () => {
        $scope.open = !$scope.open;
      };

      element = angular.element("<toolbar></toolbar>");
      $compile(element)($scope);

    });

    it("Should close the menu when click an option of the menu", () => {
      let button = element.find("div");
      let links = element.find("ul");
      let option;  
      
      button.triggerHandler("click");
      option = element.find('li');
      option.triggerHandler("click");

      expect(links.hasClass("open")).toBe(false);
    });
  });
});
