function exist(board, word){
    let row = board.length; //3
    let col = board[0].length; //4
    let wordLength = word.length; //6
    let visted;
   
    let directions = [[0,1],[1,0],[0,-1],[-1,0]];

    for(let i = 0; i < row ; i++){
        for(let j = 0;j < col; j++){
            if(board[i][j] === word[i]){
                for(let dir of directions){
                    let newRow = dir[0]; 
                    console.log(newRow);
                    let newCol = dir[1];
                    console.log(newCol);
                     visted[newRow][newCol] = true;
                    if(newRow >= 0 && newRow < row && newCol >= 0 && newCol < col && visted[newRow][newCol] && (board[newRow][newCol] ===word[i])){
                        
                       
                        if(exist(board, word.slice(i+1), visted)){
                            return true;
                        }
                    }
                }
            }
        }
    }return false;
}

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")); 