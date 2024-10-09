const url = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let btn = document.querySelector(".btn");
let intext = document.querySelector(".inputtext");
let img = document.querySelector(".noimg");
let qrimg = document.querySelector("#idimage");

btn.addEventListener("click", (intext) => {
  btnfunction();
});
const btnfunction = () => {
  if (intext.value.length > 0) {
    img.classList.remove("noimg");
    qrimg.src = url + intext.value;
    setTimeout(() => {
      img.classList.add("noimg");
    }, 20000);
  } else {
    intext.classList.add("error");
    setTimeout(() => {
      intext.classList.remove("error");
    }, 1000);
  }
};
