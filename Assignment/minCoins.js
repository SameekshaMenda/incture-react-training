function minCoinsToMakeAmount(coins, amount) {
    let sum = 0;
    let count = 0;
    for (let i = 1; i < coins.length; i++) {

        for (let j = i - 1; j < coins.length; j++) {

            
            sum = coins[i] + coins[j];
            console.log(sum);
            
            if (sum === amount)
                return sum;
            
        }
        return -1;
    }
    
    
}
console.log(minCoinsToMakeAmount([1,2,5,8,10],15)); 
    
// console.log(minCoinsToMakeAmount([2,10], 20));
