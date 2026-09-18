//2.1
function echanger(tab, i, j) {
    const tmp = tab[i];
    tab[i] = tab[j];
    tab[j] = tmp;
}

//2.2
function ranger(T) {
    let gauche = 0;
    let droite = T.length - 1;

    while (gauche < droite) {
        if (T[gauche] === 0) {
            gauche++;
        } else if (T[droite] === 1) {
            droite--;
        } else {
            // T[gauche] === 1 et T[droite] === 0
            echanger(T, gauche, droite);
            gauche++;
            droite--;
        }
    }
    return T;
}

//2.3
function nombreUn(T) {
    let compte = 0;
    for (let i = T.length - 1; i >= 0 && T[i] === 1; i--) {
        compte++;
    }
    return compte;
}

