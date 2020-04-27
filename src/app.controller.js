function AppController(appService) {
  let vm = this;
  vm.$onInit = onInit;

  function onInit() {
    appService
      .get()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

AppController.$inject = ["appService"];

export default AppController;
