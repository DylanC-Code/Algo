let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let longueur = array.length;

function randomArray(array, longueur) {
  for (i = 0; i !== 50; i++) {
    let plusMinus = Math.random() > 0.5 ? true : false;
    let howManyMoves = Math.ceil(Math.random() * longueur);
    let oldIndex = Math.floor(Math.random() * longueur);
    let newIndex = plusMinus
      ? oldIndex + howManyMoves
      : oldIndex - howManyMoves;

    if (newIndex <= longueur - oldIndex && newIndex > -1) {
      console.log("Old Index:" + oldIndex + " Old Value:" + array[oldIndex]);
      console.log("New index :" + newIndex + " New Value:" + array[newIndex]);
      v1 = array[oldIndex];
      v2 = array[newIndex];
      array[newIndex] = v1;
      array[oldIndex] = v2;
    }
  }
  if (array.length > longueur) {
    randomArray(array, longueur);
  }
}

// randomArray();
randomArray(array, longueur);
console.log(array.length);
console.log(array);
