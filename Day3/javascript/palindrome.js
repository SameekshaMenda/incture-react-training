
 let org_num = 121;
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
    console.log("palindrome");
    }
    else
    {
        console.log("not palindrome");
    }