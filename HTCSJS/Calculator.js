let button = document.querySelectorAll(".button");
let string = '';

Array.from(button).forEach((button) => {
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }
        else{
            console.log(string);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
            
        }
    })
})
