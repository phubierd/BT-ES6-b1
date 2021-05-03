

const avg = (...nums) => {
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    return total / nums.length;
}

// console.log(avg(2,3,4))

document.getElementById("btnKhoi1").addEventListener("click", () => {
    const toan1 = parseFloat(document.getElementById("inpToan").value);
    const ly1 = parseFloat(document.getElementById("inpLy").value);
    const hoa1 = parseFloat(document.getElementById("inpHoa").value);

    document.getElementById("tbKhoi1").innerHTML = avg(toan1, ly1, hoa1).toFixed(2);
    // console.log(avg(toan1,ly1,hoa1))
})

document.getElementById("btnKhoi2").addEventListener("click", () => {
    const van2 = parseFloat(document.getElementById("inpVan").value);
    const su2 = parseFloat(document.getElementById("inpSu").value);
    const dia2 = parseFloat(document.getElementById("inpDia").value);
    const eng2 = parseFloat(document.getElementById("inpEnglish").value);
    document.getElementById("tbKhoi2").innerHTML = avg(van2, su2, dia2, eng2).toFixed(2);
    console.log(avg(van2, su2, dia2, eng2).toFixed(2))
    console.log(van2, su2, dia2, eng2)
})



