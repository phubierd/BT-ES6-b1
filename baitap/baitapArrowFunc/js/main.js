const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];





const hienThiDS = () => {
    let content = "";

    colorList.map((colorList) => {
        content += `
        <button class="color-button ${colorList}"   onclick='clicky()'></button>
        `
    });

    document.getElementById("colorContainer").innerHTML = content;
}


hienThiDS();

// console.log(document.getElementById("colorContainer"))




// click đổi màu:


// tryOn();
// const tryOn = (id)=>{
//     let colorSelected;

//     for (let value of colorList){
//         if (value.id == id){
//             console.log(value);
//             colorSelected = value;
//         }
//     }
// }


const clicky = () => {
    console.log("123")
    let colorSelected;

    for (let value of colorList) {
        console.log(value)
        // if (document.querySelector("").getAttribute("class"))

    }

    // // for (let index in colorList){
    // //     console.log(colorList[index])
    // //     console.log(colorList)
    // // }

    // for(let i = 0 ; i< colorList.length; i++){
    //     console.log(colorList[i])
    // }

}
window.clicky = clicky;

// const ppp = document.querySelector(".cinnabar").getAttribute("class")
// console.log(ppp)
// const www = document.querySelector(".color-button")
// console.log(www)
const qqq = document.querySelectorAll("button")[0].getAttribute("class")
console.log(qqq)
