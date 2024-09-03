function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  // pegar a tag img
const img=document.querySelector("#profile img")
//substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver ligth mode, adicionar a img light

  img.setAttribute("src", "./assets/avatar-light.png")
  img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando óculos de sol e camisa preta,sem barba e fundo azul")
  } else {
    // se tiver sem ligth mode, manter a img normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt","Foto de Mayk Brito sorrindo, usando óculos e camisa preta,barba e fundo amarelo")
  }

}

