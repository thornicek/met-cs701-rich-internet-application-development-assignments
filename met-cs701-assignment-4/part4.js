const DB_NAME = 'fruitDB';
const DB_VERSION = 1;
const DB_STORE_NAME = 'fruitStore';

var db;

document.addEventListener('DOMContentLoaded', init);

function init() {
    createDb();
    var addButton = document.getElementById("addButton");
    addButton.addEventListener("click", insertInDB);
    var removeButton = document.getElementById("removeButton");
    removeButton.addEventListener("click", deleteItemDB);
    
}

function createDb() {
    console.log("createDb ...");
   
    var request = window.indexedDB.open(DB_NAME, DB_VERSION);
    
    request.onsuccess = function (evt) {
      db = request.result;
      console.log("createDb DONE");
      displayDb();
    };
    
    request.onerror = function (evt) {
      console.error("createDb ERROR:", evt.target.errorCode);
    };
    console.log(db);

    request.onupgradeneeded = function (evt) {
      console.log("createDb.onupgradeneeded ...");
      
      var store = evt.currentTarget.result.createObjectStore(
        DB_STORE_NAME, { keyPath: 'name'});
      console.log(`store is ${store}`);

      store.createIndex('idIndex',       
                        'name',       { unique: true });
      store.createIndex('typeIndex',     
                        'price',     { unique: false });
    };
    console.log(`db is ${db}`);

  }

  function insertInDB() {
      console.log("insertInDB entered");
      
      if (!db)
        return;

    console.log(`db is ${db}`);

    var transaction = db.transaction(DB_STORE_NAME, "readwrite");
    var store = transaction.objectStore(DB_STORE_NAME); 

    console.log(`store is ${store}`);


    var fruitName = document.getElementById("fruitInput").value;
    var fruitPrice = document.getElementById("priceInput").value;

    console.log(`fruitName is ${fruitName} and fruitPrice is ${fruitPrice}`);

    var request = store.add({
        "name": fruitName,
        "price": fruitPrice
    });

    request.onsuccess = function(e) {
        console.log("Added", fruitName);
      };

      request.onerror = function(e) {
        console.log("Error", e.target.error.message);
      };

      displayDb();
  }

  function displayDb() {
    
    console.log("displayDb entered");

    var fruitList = document.getElementById("fruitList");
    fruitList.innerHTML = "";

    if (db) {
        try {
            var store = db.transaction(DB_STORE_NAME).objectStore(DB_STORE_NAME);
          
            var request = store.openCursor();
          
            request.onsuccess = function(evt) {  
            var cursor = evt.target.result;  
            if (cursor) {
              var fruit = cursor.value;
              var jsonStr = JSON.stringify(fruit);
              var fruitBullet = document.createElement("li");
              fruitBullet.innerHTML = jsonStr;
              fruitList.append(fruitBullet);      
              cursor.continue();  
            }  
          };
  
        request.onerror = function (evt) {
        console.error("displayDB ERROR:", evt.target.errorCode);
          };
  
        } catch (e) {
          console.log(e);
          logMessage(e);
        }
      }
  }

  function deleteItemDB() {
    
    console.log("DeleteItem entered");

    if (!db) return;

    console.log(`db is ${db}`);

    var transaction = db.transaction(DB_STORE_NAME, "readwrite");
    var store = transaction.objectStore(DB_STORE_NAME); 

    console.log(`store is ${store}`);


    var fruitName = document.getElementById("fruitInput").value;

    console.log(`fruitName is ${fruitName}`);

    var request = store.delete(fruitName);

    request.onsuccess = function(e) {
        console.log("Removed", fruitName);
      };

      request.onerror = function(e) {
        console.log("Error", e.target.error.message);
      };

    displayDb();
  }