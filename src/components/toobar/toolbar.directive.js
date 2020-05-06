function toolbarDirective() {
  let directive = {
    restrict: "EA",
    link: link,
    scope: {
      fromDirectiveFn: "&info",
    },
  };

  return directive;

  function link(scope, element) {
    element.on("click", () => {
      scope.fromDirectiveFn();
      console.log("clicou!");
    });
  }
}

export default toolbarDirective;
