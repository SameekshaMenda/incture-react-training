let flag = true; // initially assume the number is prime
let num = 29; // example number to check for primality
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
else
{
    console.log(num, "is not a prime number");
}