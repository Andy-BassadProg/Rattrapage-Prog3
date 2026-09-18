
function negatifPositif(tab) {
    let gauche = 0;
    let droite = tab.length - 1;

    while (gauche < droite) {
        if (tab[gauche] <= 0) {
            gauche++;
        } else if (tab[droite] > 0) {
            droite--;
        } else {
            // tab[gauche] > 0 et tab[droite] <= 0 : on échange
            [tab[gauche], tab[droite]] = [tab[droite], tab[gauche]];
            gauche++;
            droite--;
        }
    }
    return tab;
}

//test
console.log(negatifPositif([3, -1, 0, 4, -2, 5, -3]));
console.log(negatifPositif([-5, -3, 2, 4, 0]));