function echangerLignes(M, i, j) {
    const tmp = M[i];
    M[i] = M[j];
    M[j] = tmp;
}

function triLignes(M) {
    const m = M.length;

    for (let i = 0; i < m - 1; i++) {
        let indexMin = i;
        for (let j = i + 1; j < m; j++) {
            if (nombreUn(M[j]) < nombreUn(M[indexMin])) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            echangerLignes(M, i, indexMin);
        }
    }
    return M;
}

//test
const M = [
    [0, 0, 1, 1],
    [0, 0, 0, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 0]
];

console.log(triLignes(M));