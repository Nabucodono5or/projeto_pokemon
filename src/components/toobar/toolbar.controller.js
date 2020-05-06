function ToolbarController() {
  let vm = this;
  vm.titulo = "toolbar component";
  vm.$onInit = onInit;
  vm.funOpen = funOpen;

  function onInit() {
    vm.open = false;
  }

  function funOpen() {
    vm.open = !vm.open;
    console.log("open");
  }
}

export default ToolbarController;
