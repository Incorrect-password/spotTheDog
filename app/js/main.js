let db;
let request = indexedDB.open("spotTheDogBreeds");
request.onerror = function(event) {
    console.log("Why didn't you allow my web app to use IndexedDB?!");
};

request.onsuccess = function(event) {
    db = event.target.result;
};

db.onerror = function(event) {
    // Generic error handler for all errors targeted at this database's
    // requests!
    console.error("Database error: " + event.target.errorCode);
};




// dogData =
// json.stringify()
//
// localforage.setItem('dogBreeds', '../dogData.json').then(function (value) {
//     // Do other things once the value has been saved.
//     console.log(value);
// }).catch(function(err) {
//     // This code runs if there were any errors
//     console.log(err);
// });