const container = document.querySelector(".container"),
qrInput = container.querySelector("input"),
qrImg = container.querySelector("img"),
generateBtn = container.querySelector(".btn");

generateBtn.addEventListener("click",()=>{
    let qrValue = qrInput.value;
    if (!qrValue) return;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load",()=>{
        container.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup",()=>{
    if (!qrInput.value) {
        container.classList.remove("active");
    }
});