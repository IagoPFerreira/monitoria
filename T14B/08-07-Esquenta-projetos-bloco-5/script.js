let asideUl = document.querySelector('#listaAside');
let asideButton = document.querySelector("#asideButton")
let asideInput = document.querySelector("#asideInput")

asideButton.addEventListener('click', function () {
  let li = document.createElement('li');
  asideUl.appendChild(li);
  li.innerText = asideInput.value;
  asideInput.value = '';
})

let imagensInput = document.querySelector('#imagensInput');
let imgButton = document.querySelector('#imgButton');
let imgInput = document.querySelector('#imgInput');

imgButton.addEventListener('click', function () {
  let dinamicImg = document.createElement('img');
  imagensInput.appendChild(dinamicImg);
  dinamicImg.src = imgInput.value;
  dinamicImg.className = 'imagemDinamica';
  imgInput.value = '';
})

// window.onload