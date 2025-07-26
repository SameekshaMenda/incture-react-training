// function longestOfLongestSubstring(string){
   
//     let longestString = "";
//     let longestString1 = "";
//     let longestString2 = "";
    
   
//         // if(longestString.length >=0)
//         // {
//         //    longestString.push(char[i]);
//         //    console.log(longestString);
//         // }
//         for (let i = 0 ; i < string.length - 1; i++)
//         {
//             longestString1 += string[i];
//             console.log(longestString2)
//             let visited = [];
//             for(let j=string.length - 1; j>=0; j--)
//             {
            
//             longestString1 += string[j];
            
//             console.log(longestString1);
//             }
//         }
        
    
// }

// longestOfLongestSubstring("ababc");


function longestOfLongestSubstring(s){
   
    let charSet  = new Set();
    let left = 0;
    let max_length = 0;
    
   
        for (let right = 0 ; right < s.length; right++)
        {
            while(charSet.has(s[right]))
            {
                charSet.delete(s[left]);
                left++;
            }
            charSet.add(s[right]);
            max_length = Math.max(max_length, right-left + 1);
        }
        return max_length;
        
    
}

console.log(longestOfLongestSubstring("ababc"));