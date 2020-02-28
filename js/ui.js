// initialize side-nav
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

const computers = document.querySelector('.computers');

// render computers data
const renderComputer = (data, id) => {

  const html = `
    <div class="card-panel col s4 blue darken-3">
      <img src="/img/desktop.png" alt="computer">
      <div class="computer-details center">
        <div class="computer-title"><i class="material-icons">person</i> ${data.nombre}</div>
        <div class="computer-description">
          <p><i class="material-icons">desktop_windows</i> ${data.nomenclatura}</p>
          <p><i class="material-icons">business_center</i> ${data.depto}</p>
          <p><i class="material-icons">bug_report</i> ${data.procesador}</p>
          <p><i class="material-icons">network_check</i> ${data.memoria_ram}</p>
          <p><i class="material-icons">apps</i> ${data.serial}</p>
        </div>
      </div>
      <div class="ver-mas center">
        <a href="#" class="btn"><i class="material-icons left">add_circle</i> Ver Mas</a>
      </div>
    </div>
  `;
  computers.innerHTML += html;

};