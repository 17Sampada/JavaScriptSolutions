function prime()
{
    var p=document.getElementById("result");
    var num=parseInt(f1.n.value);
    if (isNaN(num)) {
        p.innerHTML = "Please enter a valid number.";
        return;
    }
    if (num <= 1){
        p.innerHTML = "Number is not prime.";
        return;
    }
         
    for (let i = 2; i < num; i++){
        if (num % i == 0){
            p.innerHTML = "Number is not prime.";
            return;
        }
    }
    p.innerHTML = "Number is prime.";
    

}