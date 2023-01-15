// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat() {
    cats.push('Ralph');
}

function destructivelyPrependCat() {
    cats.unshift('Bob')
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
    return ([...cats,'Broom']);
}

function prependCat() {
    return (['Arnold',...cats]);
}

function removeLastCat() {
    const copyOfCats = cats.slice(0,2);
    return copyOfCats;
}

function removeFirstCat() {
    const copyOfCats1 = cats.slice(1);
    return copyOfCats1;
}