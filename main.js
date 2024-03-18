// Variáveis
const page1 = document.querySelector(".page1")
const page2 = document.querySelector(".page2")
const imgBtn = document.querySelector("#imgBtn")
const btnReset = document.querySelector("#btnReset")
const fortune = [
  "O aprendizado é como o horizonte: não há limites.",
  "Não há que ser forte, há que ser flexível.",
  "Limitações são fronteiras criadas apenas pela nossa mente.",
  "O cão não ladra por valentia e sim por medo.",
  "Procure acender uma vela em vez de amaldiçoar a escuridão.",
  "A palavra é prata, o silêncio é ouro.",
  "Lembre-se de que grandes realizações e grandes amores envolvem grandes riscos.",
  "Um pouco de perfume sempre fica nas mãos de quem oferece flores.",
  "O homem só envelhece quando os lamentos substituem seus sonhos.",
  "A persistência realiza o impossível.",
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
]


// Eventos
page1.addEventListener('click', advanceClick)
page2.addEventListener('click', resetClick)
document.addEventListener('keydown', ent)


// Funções callback

function advanceClick() {
  togglePage()
  luck()
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

function luck() {
  let allFortunes = fortune.length
  let randomNumber = Math.floor(Math.random() * allFortunes)  
  page2.querySelector("p").innerText = `${fortune[randomNumber]}`
}



