function shortestPalindrome(s) {
    let reversedString = s.split('').reverse().join('');
    console.log(reversedString);
    if (reversedString === s) {
        console.log("palindrome");
    }
    else {
        // for (let i = 1; i < s.length; i++) {
        //     reversedString += s[i];
        // }
        // console.log(reversedString);

        let charSet = new Set();
        let left = 0;
        let max_length = 0;


        for (let right = 0; right < s.length; right++) {
            while (charSet.has(s[right])) {
                charSet.delete(s[left]);
                left++;
            }
            charSet.add(s[right]);
            max_length = Math.max(max_length, right - left + 1);
        }
        console.log(s);
        console.log(charSet);

       

    }



}

shortestPalindrome("defe");