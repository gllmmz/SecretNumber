let secretNumber = Math.floor(Math.random() * 10) + 1;
let numberButtonAll = document.querySelectorAll(".number");
let hint = document.querySelector('.hint');
for(let i = 0; i < 10; i++){
    numberButtonAll[i].onclick = function(){
        let userNumber = numberButtonAll[i].innerHTML;
        if (userNumber == secretNumber){
            numberButtonAll[i].classList.add('win')
            hint.innerHTML = 'Ты угадал!';
        }else if(secretNumber > userNumber){
            numberButtonAll[i].classList.add('disactive');
            hint.innerHTML = 'Нет, нужно больше!';
        }else{
            numberButtonAll[i].classList.add('disactive');
            hint.innerHTML = 'Нет, нужно меньше!';
        }

    }
}