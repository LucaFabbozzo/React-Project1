// verifica se ci sono già elementi salvati nel localStorage per la chiave "movies". Se l'array esiste, il nuovo elemento viene aggiunto ad esso. Se non esiste, un nuovo array viene creato e il nuovo elemento viene aggiunto ad esso. In entrambi i casi, l'array aggiornato viene salvato nel localStorage.

export const SaveIntoStorage = (key, item) => {
  //get the elements that we already have in the localstorage
  let items = JSON.parse(localStorage.getItem(key));


  //check if it is an array
  if (Array.isArray(items)) {
    // add into the array a new item
    items.push(item);
  } else {
    // crate array with the new movie
    items = [item];
  }

  // save into localStorage
  localStorage.setItem("movies", JSON.stringify(items));

  //return object
  return item;
};
