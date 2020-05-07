import "angular";
import "angular-mocks";
import "./../app";

describe("route pages", () => {
  var $location, $q, $state, $httpBackend;

  function services($injector) {
    $location = $injector.get("$location");
    $q = $injector.get("$q");
    $state = $injector.get("$state");
    $httpBackend = $injector.get("$httpBackend");
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
    }

    describe("router otherwise is home", () => {
      it("home page is loading with access to main '/' route ", () => {
        goTo('/');

        expect($state.current.name).toBe("home");
      });

      it("any route not existent should be access to main home route", () => {});
    });
  });
});
