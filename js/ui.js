// initialize side-nav
// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.sidenav');
//   var instances = M.Sidenav.init(elems, options);
// });

const computers = document.querySelector('.computer');

// render computers data
const renderComputer = (data, id) => {

  const html = `
  <div class="div1">
    <div data-id="${id}">
      <img src="/img/desktop.png">
      <div class="content">
        <p><i class="material-icons">person</i> ${data.nombre}</p>
        <p><i class="material-icons">desktop_windows</i> ${data.nomenclatura}</p>
        <p><i class="material-icons">business_center</i> ${data.depto}</p>
        <p><i class="material-icons">bug_report</i> ${data.procesador}</p>
        <p><i class="material-icons">network_check</i> ${data.memoria_ram}</p>
        <p><i class="material-icons">apps</i> ${data.serial}</p>
      </div>
      <div class=" u-center">
        <div class="col">
          <button class="btn-dark btn-tiny"><i class="material-icons left">add_circle</i> Ver Mas<button>
        </div>
      </div>
    </div>
  </div>
  `;
  computers.innerHTML += html;

};

//edit computer
const editComputer = (data, id) => {

  const html = `
  <div class="div1">
    <div data-id="${id}">
      <img src="/img/desktop.png">
      <div class="content">
        <p><i class="material-icons">person</i> ${data.nombre}</p>
        <p><i class="material-icons">desktop_windows</i> ${data.nomenclatura}</p>
        <p><i class="material-icons">business_center</i> ${data.depto}</p>
        <p><i class="material-icons">bug_report</i> ${data.procesador}</p>
        <p><i class="material-icons">network_check</i> ${data.memoria_ram}</p>
        <p><i class="material-icons">apps</i> ${data.serial}</p>
      </div>
      <div class=" u-center">
        <div class="col">
          <button class="btn-dark btn-tiny"><i class="material-icons left">add_circle</i> Ver Mas<button>
        </div>
      </div>
    </div>
  </div>
  `;
  computers.innerHTML += html;

};

// remove computer
// const removeComputer = (id) => {
//   const computer = document.querySelector(`.info[data-id=${id}]`);
//   computer.remove();
// };

{/* <div class="px-2">
  <div class="flex -mx-2">
    <div class="w-1/3 px-2">
      <div class="bg-gray-400 h-12"></div>
    </div>
    <div class="w-1/3 px-2">
      <div class="bg-gray-500 h-12"></div>
    </div>
    <div class="w-1/3 px-2">
      <div class="bg-gray-400 h-12"></div>
    </div>
  </div>
</div> */}