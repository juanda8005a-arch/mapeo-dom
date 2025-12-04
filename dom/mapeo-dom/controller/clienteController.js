// let titulo =  document.querySelector("h1")
// let titulo = document.getElementsByName("h1")
// console.log(titulo)
// console.log(titulo.textContent)
// titulo.textContent = "esto es un nuevo titulo en JAVA SCRIPT"
// if (true) {
//     titulo.textContent = " es verdadero"

// } else{
//     titulo.textContent = " es falso"
//     titulo [1].textContent = " ES falso"
//     titulo [1].style.color = "red"
//     titulo [1].style.fontSize = "50px"
//     titulo[1].classList.add("title")
// }

import { clientes } from '../model/clientes.js';

let listarclientes = document.getElementById("listarClientes");

listarclientes.addEventListener("click", function () {
  // Limpiar antes de listar
  

  clientes.forEach(function (cliente) {
    // Contenedor principal
    let cardcliente = document.createElement("div");
    cardcliente.classList.add("cliente-card");

    // Header
    let cardHeader = document.createElement("header");
    cardHeader.classList.add("card-header");

    // Avatar
    let avatar = document.createElement("avatar");
    avatar.classList.add("avatar");
    avatar.textContent = cliente.nombre[0]; // inicial del nombre

    // Badge
    let badge = document.createElement("span");
    badge.classList.add("badge");
    if (cliente.estado === "activo") {
      badge.classList.add("badge-activo");
      badge.textContent = "Activo";
    } else if (cliente.estado === "inactivo") {
      badge.classList.add("badge-inactivo");
      badge.textContent = "Inactivo";
    } else {
      badge.classList.add("badge-pendiente");
      badge.textContent = "Pendiente";
    }

    // Body
    let cardBody = document.createElement("cardbody");
    cardBody.classList.add("card-body");

    let nombre = document.createElement("div");
    nombre.classList.add("cliente-nombre");
    nombre.textContent = cliente.nombre;

    let empresa = document.createElement("empresa");
    empresa.classList.add("cliente-empresa");
    empresa.textContent = cliente.empresa;

    let info = document.createElement("div");
    info.classList.add("cliente-info");

    let emailItem = document.createElement("div");
    emailItem.classList.add("info-item");
    emailItem.innerHTML = `<span class="info-icon">📧</span><span class="info-text">${cliente.email}</span>`;

    let telItem = document.createElement("div");
    telItem.classList.add("info-item");
    telItem.innerHTML = `<span class="info-icon">📞</span><span class="info-text">${cliente.telefono}</span>`;

    info.append(emailItem);
    info.append(telItem);

    cardBody.append(nombre);
    cardBody.append(empresa);
    cardBody.append(info);

    // Footer
    let cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");

    let btnPrimary = document.createElement("button");
    btnPrimary.classList.add("btn", "btn-primary");
    btnPrimary.textContent = "Ver Perfil";

    let btnSecondary = document.createElement("button");
    btnSecondary.classList.add("btn", "btn-secondary");
    btnSecondary.textContent = "Contactar";

    cardFooter.append(btnPrimary);
    cardFooter.append(btnSecondary);

    // Armar estructura
    cardHeader.append(avatar);
    cardHeader.append(badge);
    cardcliente.append(cardHeader);
    cardcliente.append(cardBody);
    cardcliente.append(cardFooter);

    // Insertar en el contenedor
    listarclientes.append(cardcliente);
  });
});