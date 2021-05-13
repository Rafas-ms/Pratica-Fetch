fetch(`https://dog.ceo/api/breeds/image/random`).then(response => response.json()).then(data => {
  alert(data.message +"\nClique 'OK' para gerar a imagem!")
  console.log(data)
  let img = document.createElement("img");
  img.setAttribute("src", data.message);
  let dog = document.getElementById('cachorro').appendChild(img)

}).catch(e => console.error())
