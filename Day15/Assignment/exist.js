function exist(board, word){
    let rows = board.length;
    let cols = board[0].length;

    function dfs(row, col, index){

        if(index === word.length) return true;

        if(row < 0 || col < 0 || row >= rows || col >= cols || board[row][col] !== word[index]) return false;

        let temp = board[row][col];
        board[row][col] = '#'; // mark as visited

        let found = dfs(row + 1, col, index + 1) ||
                    dfs(row - 1, col , index + 1) ||
                    dfs(row, col + 1, index + 1) ||
                    dfs(row , col - 1, index + 1) 

        board[row][col] = temp; // unmark
        return found;
    }

    for(let r =0; r < rows; r++)
    {
        for(let c = 0; c < cols; c++){
            if(dfs(r, c, 0)){
                return true;
            }
        }
    }
    return false
}
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")); // false
