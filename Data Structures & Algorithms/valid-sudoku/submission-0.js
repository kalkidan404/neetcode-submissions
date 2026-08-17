class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

    let rows = Array.from({ length: 9 }, () => new Set());
    let cols = Array.from({ length: 9 }, () => new Set());
    let boxes = Array.from({ length: 9 }, () => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {

            let num = board[i][j];

            if (num === ".") {
                continue;
            }

            let box = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            if (
                rows[i].has(num) ||
                cols[j].has(num) ||
                boxes[box].has(num)
            ) {
                return false;
            }

            rows[i].add(num);
            cols[j].add(num);
            boxes[box].add(num);
        }
    }

    return true;
    }
}
