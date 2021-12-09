const mainWin = document.querySelector(".main");
const img = document.querySelector(".img");
const title = document.querySelector("#title");

getCatGif();

//fetch catgif
function getCatGif() {
  fetch("https://meme-api.herokuapp.com/gimme/CatGifs")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((result) => {
      console.log(result.url);
      loader();
      setTimeout(() => {
        img.setAttribute("src", result.url);
        title.setInnerText(result.title);
      }, 1000);
    });
}
function loader() {
  var url1 = "loading.gif";
  img.setAttribute("src", url1);
}
