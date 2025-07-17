for(let j=1; j<=1000; j++)
{
    let flag = true; // initially assume the number is prime
let num = j; // example number to check for primality
for(let i = 2; i <= num/2; i++)
{
    if(num % i == 0)
    {
        flag = false;  // if the number is divisible by any number other than 1 and itself, it's not prime
        break;
    }

}
if(flag == true)
{
    console.log(num, "is a prime number");
}

}