import "angular";
import "angular-mocks";
import "./../app";

describe("App module", () => {
  beforeEach(() => {
    angular.mock.module("app");
  });
  it("teste inicial: should show message pending", () => {
    pending("karma está funcional");
  });
});
