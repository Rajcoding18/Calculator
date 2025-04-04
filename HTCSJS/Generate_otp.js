let button = document.querySelector('button');
button.addEventListener('click', function(){
    let digit = '0123456789';
    let otp = ''
    for (let i=0; i<4; i++) {
        otp += digit[Math.floor(Math.random() * digit.length)]
        
    }
    console.log(otp);
    document.querySelector('.contain').innerHTML = otp;
    
})
