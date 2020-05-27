function ToolbarController() {
  let vm = this;
  vm.titulo = "toolbar component";
  vm.$onInit = onInit;
  vm.funOpen = funOpen;
  vm.listUrl = [
    {
      name: "Kanto",
      url: "https://pokeapi.co/api/v2/pokemon?limit=151",
    },
    {
      name: "Johto",
      url: "https://pokeapi.co/api/v2/pokemon?limit=251&offset=151",
    },
    {
      name: "Hoenn",
      url: "https://pokeapi.co/api/v2/pokemon?limit=251&offset=386",
    },
  ];

  function onInit() {
    vm.open = false;
  }

  function funOpen() {
    vm.open = !vm.open;
  }
}

export default ToolbarController;
