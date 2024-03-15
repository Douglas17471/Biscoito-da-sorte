// Variáveis
const page1 = document.querySelector(".page1")
const page2 = document.querySelector(".page2")
const imgBtn = document.querySelector("#imgBtn")
const btnReset = document.querySelector("#btnReset")

// Eventos
page1.addEventListener('click', advanceClick)
page2.addEventListener('click', resetClick)
document.addEventListener('keydown', ent)


// Funções callback
function advanceClick() {
  togglePage()
  // page1.classList.add("hide")
  // page2.classList.remove("hide")
}
function resetClick() {
  togglePage()
  // page1.classList.remove("hide")
  // page2.classList.add("hide")
}

function togglePage() {
  page1.classList.toggle("hide")
  page2.classList.toggle("hide")
}

function ent(e) {
  if(e.key == 'Enter' && page1.classList.contains("hide")) {
    resetClick()
  } else if (e.key == 'Enter' && page2.classList.contains("hide")) {
    advanceClick()
  }
}