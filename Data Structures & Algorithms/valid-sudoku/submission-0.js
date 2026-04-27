class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const row = {};
        const col = {};
        const box = {};

        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                let val = board[i][j];
                if(val == '.') continue;

                let boxIdx = Math.floor(i/3) * 3 + Math.floor(j/3);
                let rowKey = `${i}-${val}`;
                let colKey = `${j}-${val}`;
                let boxKey = `${boxIdx}-${val}`

                if(row[rowKey] || col[colKey] || box[boxKey]) return false;
                row[rowKey] = true;
                col[colKey] = true;
                box[boxKey] = true;
            }
        }
        return true;
    }
}
