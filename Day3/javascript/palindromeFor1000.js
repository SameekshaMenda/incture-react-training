for(let i=1;i<=1000;i++)
{
    
 let org_num = i;
 let temp = org_num;
 let rev  = 0;

 while(temp>0)
 {
    let rem = temp% 10;
    rev = rev*10 + rem;
    temp = Math.floor(temp/10);
 }
    if (org_num == rev)
    {
    console.log(org_num,"palindrome");
    }
    else
    {
        console.log(org_num,"not palindrome");
    }
}