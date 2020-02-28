// real-time listener
db.collection('computadoras').onSnapshot(snapshot => {
  //console.log(snapshot.docChanges());
  snapshot.docChanges().forEach(change => {
    //console.log(change.type, change.doc.id, change.doc.data());
    if(change.type === 'added'){
      renderComputer(change.doc.data(), change.doc.id);
    }
    if(change.type === 'removed'){
      //removeComputer(change.doc.id);
    }
  });
});

// add new computer
const form = document.querySelector('form');
form.addEventListener('submit', evt => {
  evt.preventDefault();
  
  const newComputer = {
    nombre: form.nombre.value,
    nomenclatura: form.nomenclatura.value,
    ciudad: form.ciudad.value,
    depto: form.depto.value,
    oficina: form.oficina.value,
    marca: form.marca.value,
    modelo: form.modelo.value,
    procesador: form.procesador.value,
    memoria_ram: form.tipo_pc.value,
    slots: form.slots.value,
    tipo_mem: form.tipo_mem.value,
    ip: form.ip.value,
    serial: form.serial.value,
    sistema_o: form.sistema_o.value,
    tipo_pc: form.tipo_pc.value,
  };

  db.collection('computadoras').add(newComputer)
    .catch(err => console.log(err));

  form.nombre.value = '';
  form.nomenclatura.value = '';
  form.ciudad.value = '';
  form.depto.value = '';
  form.oficina.value = '';
  form.marca.value = '';
  form.modelo.value = '';
  form.procesador.value = '';
  form.tipo_pc.value = '';
  form.slots.value = '';
  form.tipo_mem.value = '';
  form.ip.value = '';
  form.serial.value = '';
  form.sistema_o.value = '';
  form.tipo_pc.value = '';
});

// remove a computer
const computerContainer = document.querySelector('.computers');
computerContainer.addEventListener('click', evt => {
  if(evt.target.tagName === 'I'){
    const id = evt.target.getAttribute('data-id');
    //console.log(id);
    db.collection('computadoras').doc(id).delete();
  }
});