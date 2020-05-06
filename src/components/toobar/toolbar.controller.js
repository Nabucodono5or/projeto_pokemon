function ToolbarController() {
  let vm = this;
  vm.titulo = "toolbar component";
  vm.open = false;
  vm.funOpen = funOpen;

  function funOpen() {
    vm.open = !vm.open;
    console.log("open");
  }
}

export default ToolbarController;
