// -Crea una catena di Promises per simulare un'operazione asincrona in più fasi. -La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }. -La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3']. -Infine, chiama le funzioni per recuperare e stampare in console il nome dell'utente e i titoli dei post.

function fetchUserData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = { id: 1, name: 'John' };
        resolve(user);
      }, 1000);
    });
  }
  
  function fetchUserPosts(userId, userName) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const post = ['Post 1', 'Post 2', 'Post 3'];
            resolve(post);
        }, 1000);
    });
  }
  
  fetchUserData().then((user)=>{
    console.log("Nome utente: ", user.name);
    return fetchUserPosts(user.id, user.name);
  })
  .then((post)=>{
    console.log("post:", post)
  })
  .catch((errore)=>{
    console.log("Si è verificato un errore");
  })
  
    

