let num = 3;
if(num == 0)
{
    return ("Factorial of 0 is 1");
}
let  fact = 1;
for(let i = 1; i<=num; i++)
{
    fact *= i;

}
console.log("Factorial of", num, "is", fact);