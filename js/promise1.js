
    // Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 utilizzando Promises per una migliore gestione degli errori.
    // La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.

    function fetchDataFromAPI() {
    
      return new Promise((resolve, reject) =>{
          setTimeout(() =>{
              const dati = { name: "John", age: 30 };
              if (dati){
                  resolve(dati);
              } else {
                  reject("Impossibile il recupero dei dati da API");
              }
          }, 1000);
  
      });
    }

  
    fetchDataFromAPI().then((dati)=>{
      console.log("successo", dati);
    })
    .catch((errore)=>{
      console.log("errore", errore)
    });
    