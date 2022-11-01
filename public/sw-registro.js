/* se o serviceWorker for suportado pelo navegador */
if ("serviceWorker" in navigator) {
  /* se existir, faça o navegador registrar */
  navigator.serviceWorker
    .register("sw-petshop.js")
    .then(function () {
      console.log("service worker foi registrado com sucesso!");
    })
    .catch(function (error) {
      console.log("erro no service worker: " + error.message);
    });
} else {
  console.log("Este navegador não suporta o service worker!");
}
