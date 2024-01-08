const persons = [
    {
      id: 1,
      firstName: 'Mario',
      lastName: 'Rossi',
      age: 25
    },
    {
      id: 2,
      firstName: 'Maria',
      lastName: 'Verdi',
      age: 32
    },
    {
      id: 3,
      firstName: 'Giovanni',
      lastName: 'Rossi',
      age: 35
    }
  ];
  
  const jobs = [
    {
      id: 1,
      jobTitle: 'CEO'
    },
    {
      id: 2,
      jobTitle: 'Project Manager'
    },
    {
      id: 3,
      jobTitle: 'Developer'
    }
  ];





function fetchPersonById(id){
return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const person = persons.find(person => person.id == id);
        if (person){
            resolve(person);
        } else {
            reject(`Nessuna persona con id ${id}`)
        }

    }, 3000);
})
}

function fetchJobById(id){
return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const job = jobs.find(job => job.id == id);
        if (job){
            resolve(job);
        } else {
            reject(`Nessuna lavoro con id ${id}`)
        }
    },2000);
})
}

Promise.all([fetchPersonById(1), fetchJobById(2)])
  .then(([person, job]) => {
    console.log('Lavoro trovato:', job);
  })
  .catch(error => {
    console.error(error);
  });