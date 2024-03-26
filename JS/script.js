let menu = document.getElementById("menu");

/*function mostrarMenu() {
  if (window.getComputedStyle(menu).display != 'flex') {
    menu.style.display = 'flex'
  } else {
    menu.style.display = 'none'
  }
  //event.preventDefault()
}*/

function mostrarMenu() {
  $(".menu").toggle();
  event.preventDefault();
}

function renderizarProdutos() {
  let secaoProdutos = document.getElementById("secao_produtos");

  let listaProdutos = [
    {
      nome: "Mouse Gamer RGB",
      imagem: "./img/imagegirl.png",
      descrição: "Esse mouse tem 10.000 dpi",
      preco: 159.9,
    },

    {
      nome: "Teclado Gamer RGB",
      imagem: "./img/imagegirl.png",
      descrição: "Esse teclado possui Switches Blue",
      preco: 229.9,
    },

    {
      nome: "Headset Gamer RGB",
      imagem: "./img/imagegirl.png",
      descrição: "Esse teclado possui microfone integrado",
      preco: 199.99,
    },

    {
      nome: "Mousepad Gamer RGB",
      imagem: "./img/imagegirl.png",
      descrição: "Esse mousepad é top e possui leds na laterais",
      preco: 159.79,
    },

    {
      nome: "Mousepad Gamer RGB",
      imagem: "./img/imagegirl.png",
      descrição: "Esse mousepad é top e possui leds na laterais",
      preco: 159.79,
    },

    {
      nome: "Mousepad Gamer RGB",
      imagem: "./img/imagegirl.png",
      descrição: "Esse mousepad é top e possui leds na laterais",
      preco: 159.79,
    },

    {
      nome: "Mousepad Gamer RGB",
      imagem: "./img/imagegirl.png",
      descrição: "Esse mousepad é top e possui leds na laterais",
      preco: 159.79,
    },

    {
      nome: "Mousepad Gamer RGB",
      imagem: "./img/imagegirl.png",
      descrição: "Esse mousepad é top e possui leds na laterais",
      preco: 159.79,
    },
  ];

  let template = "";

  for (let index = 0; index < listaProdutos.length; index++) {
    template =
      template +
      `
    <div class="card">
    <img src="${listaProdutos[index].imagem}" alt="" />
    <h3>${listaProdutos[index].nome}</h3>
    <p>${listaProdutos[index].descrição}</p>
    <p>R$ ${listaProdutos[index].preco}</p>
    <a href="#">Comprar</a>
    </div>
    `;
  }

  secaoProdutos.innerHTML = template;
}

$(document).ready(function () {
  let listaSlides = ["banner_f1", "banner_tlou", "banner_lol"];
  let slideAtual = 0;

  function mudarSlide() {
    if (slideAtual > 0) {
      $(".banner").removeClass(listaSlides[slideAtual - 1]);
    } else {
      $(".banner").removeClass(listaSlides[listaSlides.length - 1]);
    }

    $(".banner").addClass(listaSlides[slideAtual]);

    slideAtual++;

    if (slideAtual > listaSlides.length - 1) {
      slideAtual = 0;
    }
  }

  setInterval(mudarSlide, 2000);
});
