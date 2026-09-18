//2.1
function echanger(tab, i, j) {
    const tmp = tab[i];
    tab[i] = tab[j];
    tab[j] = tmp;
}