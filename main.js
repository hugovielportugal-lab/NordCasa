(function () {
  "use strict";

  // Email que recebe os pedidos de contacto. Preencher quando estiver definido.
  var CONTACT_EMAIL = "";

  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();

  // Menu em telemóvel
  var btn = document.querySelector(".menu-btn");
  var menu = document.getElementById("menu");
  if (btn && menu) {
    btn.addEventListener("click", function () {
      var aberto = menu.classList.toggle("aberto");
      btn.setAttribute("aria-expanded", String(aberto));
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        menu.classList.remove("aberto");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Formulário: prepara uma mensagem de email, sem enviar dados para nenhum servidor
  var form = document.getElementById("form");
  var estado = document.getElementById("estado");

  function aviso(texto, erro) {
    estado.textContent = texto;
    estado.className = "estado" + (erro ? " erro" : "");
  }

  function limpa(v, max) {
    return String(v || "").replace(/[\r\n]+/g, " ").trim().slice(0, max);
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nome = limpa(form.nome.value, 100);
      var email = limpa(form.email.value, 120);
      var tel = limpa(form.tel.value, 30);
      var terreno = limpa(form.terreno.value, 120);
      var msg = String(form.msg.value || "").trim().slice(0, 1000);

      if (!nome || !msg) {
        aviso("Preencha o nome e a mensagem.", true);
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        aviso("Indique um email válido.", true);
        return;
      }
      if (!CONTACT_EMAIL) {
        aviso("O contacto por email ainda não está configurado. Volte a tentar em breve.", true);
        return;
      }

      var corpo =
        "Nome: " + nome + "\n" +
        "Email: " + email + "\n" +
        (tel ? "Telefone: " + tel + "\n" : "") +
        (terreno ? "Terreno: " + terreno + "\n" : "") +
        "\n" + msg;

      window.location.href =
        "mailto:" + CONTACT_EMAIL +
        "?subject=" + encodeURIComponent("Pedido de contacto — " + nome) +
        "&body=" + encodeURIComponent(corpo);
      aviso("A abrir o seu programa de email…", false);
    });
  }
})();
