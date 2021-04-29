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

const GetButtonActive = (value) => {
  const button_list = document.getElementsByClassName("color-button");
  
  for (var i = 0; i < button_list.length; i++) {
    if (value === i) {
      // console.log(true);
      button_list[i].classList.add("active");
      document.getElementById("house").classList.add(colorList[i]);
    } else {
      // console.log(false);
      button_list[i].classList.remove("active");
      document.getElementById("house").classList.remove(colorList[i]);
    }
  }
};

const hienThiDS = () => {
  let content = "";
  
  colorList.forEach((item,index) => {
   
    content += `
        <button class="color-button ${item} " value="${item}" onclick='GetButtonActive(${index})'></button>
        `;
  });

  document.getElementById("colorContainer").innerHTML = content;
};

hienThiDS();

const listButton = document.getElementsByClassName("color-button");
listButton[0].classList.add("active");




