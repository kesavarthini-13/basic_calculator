var a=parseFloat(prompt("Enter the value"));
var b=parseInt(prompt("Enter the value"));
var c=prompt("Enter the operator");
switch(c)
{
    case '+':
        document.getElementById("result").textContent=(a+b);
        break;
    case '-':
        document.getElementById("result").textContent=(a-b);
        break;
    case '*':
        document.getElementById("result").textContent=(a*b);
        break;
    case '/':
        document.getElementById("result").textContent=(a/b);
        break;
}
