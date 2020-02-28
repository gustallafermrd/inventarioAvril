// real-time listener
db.collection('computadoras').onSnapshot(snapshot => {
  //console.log(snapshot.docChanges());
  snapshot.docChanges().forEach(change => {
    //console.log(change.type, change.doc.id, change.doc.data());
    if(change.type === 'added'){
      renderComputer(change.doc.data(), change.doc.id);
    }
    if(change.type === 'removed'){
      // remove the document data from the web page
    }
  });
});

// add new computer
const form = document.querySelector('form');
form.addEventListener('submit', evt => {
  evt.preventDefault();
  
  const computer = {
    nombre: form.nombre.value,
    nomenclatura: form.nomenclatura.value,
  };

  db.collection('computadoras').add(recipe)
    .catch(err => console.log(err));

  form.nombre.value = '';
  form.nomenclatura.value = '';
});