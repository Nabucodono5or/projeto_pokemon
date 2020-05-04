function toolbarDirective() {
  let directive = {
    restrict: "EA",
    link: link,
  };

  return directive;

  function link(scope, element) {
    element.on("click", () => {
      scope.open = !scope.open;
    });
  }
}

export default toolbarDirective;
