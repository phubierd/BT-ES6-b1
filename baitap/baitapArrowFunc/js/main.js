const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

const hienThiDS = () => {
  let content = "";

  colorList.forEach((item) => {
    content += `
        <button class="color-button ${item}" value="${item}" onclick='clickMe(value)'></button>
        `;
  });

  document.getElementById("colorContainer").innerHTML = content;
};

hienThiDS();



let listButton = document.querySelectorAll("button");
// console.log(listButton)

listButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn);
    // console.log(btn.getAttribute("value"))
    btn.classList.add("active");
    if (btn)
      document.getElementById("house").classList.add(btn.getAttribute("value"));
  });
});

const clickMe = (value) => {
//   console.log(value);
    let colorSelected;
    // for (let i = 0; i< document.getElementById("colorContainer").length;i++){
    //     console.log("i",getElementById("colorContainer")[i])
    //     if (getElementById("colorContainer")[i].value == value){
            
    //         getElementById("colorContainer")[i].classList.add("active");
    //     }else {
    //         getElementById("colorContainer")[i].classList.remove("active")
    //     }
    // }

};
window.clickMe = clickMe;


