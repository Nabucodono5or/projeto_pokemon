import "angular";
import "angular-mocks";
import "./../components/home/home";

describe(" Home module ", () => {
  var $compile;
  var $rootScope;
  var $componentController;

  function services(_$compile_, _$rootScope_, _$componentController_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $componentController = _$componentController_;
  }

  beforeEach(() => {
    angular.mock.module("homeModule");
    inject(services);
  });

  beforeEach(inject(() => {
  }));

  describe("When home page is loaded...", () => {
    it("Should be defined and have propierty titulo defined", () => {
      let bindings = {};
      let componentController = $componentController("home", null, bindings);
      expect(componentController).toBeDefined();
      expect(componentController.titulo).toEqual("segundo componente");
    });
  })

});
