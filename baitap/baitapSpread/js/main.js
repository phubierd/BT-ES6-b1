console.log(document.querySelector(".heading").innerHTML)
var letter = [...document.querySelector(".heading").innerHTML]
console.log(letter)

// hiện danh sách chữ
const tachChu = () =>{
    let content = "";
    letter.map((letter) => {
        content += `
        <span>${letter}</span>
        `;
    })
    document.querySelector(".heading").innerHTML = content
}
tachChu();


