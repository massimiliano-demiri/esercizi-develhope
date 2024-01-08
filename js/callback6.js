function fetchDataFromAPI(callback) {
    setTimeout(function () {
      const dati = { name: "John", age: 30 };
      callback(null, dati);
    }, 1000); 
  }
  
  function handleData(errore, dati) {
    if (errore) {
      console.error("Si è verificato un errore durante il recupero dei dati:", errore);
    } else {
      console.log("Dati recuperati con successo:", dati);
    }
  }

  fetchDataFromAPI(handleData);