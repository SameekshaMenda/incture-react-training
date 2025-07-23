function isPalindrome(s,end)
 {
    let left = 0;
    let right = end;

    while(left < right)
    {
        if(s[left] !== s[right])
        {
            return false;
        }
        left ++;
        right --;
    }
    return true;

 }
const shortestPalindrome = (s) => {
    let n = s.length;
    let end = n-1;
    while(end >= 0)
    {

    if(isPalindrome(s,end))
       break;
    end --;

    }

    let suffix = s.slice(end + 1);
    let reversed = suffix.split('').reverse().join('');
    return reversed + s;
};

console.log(shortestPalindrome("edef"));