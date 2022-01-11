function createPizza(){
    const pizza = document.createElement('div');
    pizza.classList.add('pizza');
    const value = document.getElementById("inputText").value;

    pizza.innerText= value;
    pizza.style.left = Math.random() * 100 + 'vw';
    pizza.style.animationDuration = Math.random() * 2 + 3 + 's';

    document.body.appendChild(pizza);

    

    setTimeout(() => {
        pizza.remove();
    }, 5000);
}

function reset(){

    document.getElementById("inputText").value = '';
    
}



