function minCoinsToMakeAmount(coins, amount){
    const dp = new Array( amount + 1).fill(Infinity);
    dp[0] = 0; // 0 coins needed to make 0 rupees

    for(let i = 1 ; i <= amount; i++)
    {
        for(let coin of coins)
        {
            if(i - coin >= 0)
            {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] === Infinity ? -1: dp[amount];
}

console.log(minCoinsToMakeAmount([1,2,5,5], 10));