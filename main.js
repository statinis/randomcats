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
      title.innerHTML = "&nbsp;";
      loader();
      setTimeout(() => {
        img.onload = function() {
          title.innerText = result.title;
        };
        img.setAttribute("src", result.url);
      }, 1000);
    });
}
function loader() {
  var url1 = "loading.gif";
  img.onload = "";
  img.setAttribute("src", url1);
}
