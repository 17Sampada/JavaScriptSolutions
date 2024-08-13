function armstrong()
{
    var p=document.getElementById("result");
    var num=parseInt(f1.n.value);
    if (isNaN(num)) {
        p.innerHTML = "Please enter a valid number.";
        return;
    }

    var sum = 0;
    var temp = num;
    var digits = num.toString().length;

    while (temp > 0) {
        var digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }

    if (sum == num) 
        p.innerHTML = "Number is an Armstrong number.";
    else 
        p.innerHTML = "Number is not an Armstrong number.";
    
}