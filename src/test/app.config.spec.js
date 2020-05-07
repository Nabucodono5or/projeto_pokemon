import "angular";
import "angular-mocks";
import "angular-ui-router";
import "./../app";

describe("route pages", () => {
  var $location, $q, $state, $httpBackend, $templateCache, $rootScope;

  function services($injector, _$rootScope_) {
    $location = $injector.get("$location");
    $q = $injector.get("$q");
    $state = $injector.get("$state");
    $httpBackend = $injector.get("$httpBackend");
    $templateCache = $injector.get("$templateCache");
    $rootScope = _$rootScope_;
  }

  function setUp() {
    $httpBackend.expect("GET", "").respond(200, {});
  }

  beforeEach(() => {
    angular.mock.module("app");
    inject(services);
  });

  describe("when go to '/' ", () => {
    function goTo(url) {
      $location.url(url);
      $rootScope.$apply();
    }

    describe("router otherwise is home", () => {
      it("home page is loading with access to main '/' route ", () => {
        goTo("/");

        expect($state.current.name).toBe("home");
      });

      it("any route not existent should be access to main home route", () => {
        goTo("/ola");

        expect($state.current.name).toBe("home");
      });
    });
  });

  describe("when go to '/listaPokemon' ", () => {
    function goTo(url) {
      $location.url(url);
      $rootScope.$apply();
    }

    describe("router to url /lista", () => {
      it("lista Pokemon page is loading with access to main '/lista' route ", () => {
        goTo("/lista");

        expect($state.current.name).toBe("listaPokemon");
      });
    });
  });
});
