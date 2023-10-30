'use-strict'
let imgBox = document.getElementById('img-box')
let qrImg = document.getElementById('qrImg')
let qrText = document.getElementById('qrText')

function generateQR(){
    if(qrText.value.length > 0){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add('show-img')
    } else {
        qrText.classList.add('error')
        setTimeout(()=>{
            qrText.classList.remove('error')
        },100)
    }
}