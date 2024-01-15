
function caricamentoDati() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Questi sono i dati ottenuti dalla fonte asincrona.");
      }, 2000);
    });
  }

  async function ottieniDati() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Questi sono i dati ottenuti dalla fonte asincrona."), 1000)
    });

    let result = await promise;

    console.log(result); 
  }

  ottieniDati();