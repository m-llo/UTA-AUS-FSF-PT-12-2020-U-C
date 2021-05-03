let db;
// create a new db request for a "BudgetDB" database.
const request = window.indexedDB.open("BudgetDB", 1);

request.onupgradeneeded = function (event) {
  // create object store called "BudgetStore" and set autoIncrement to true
  db = event.target.result;
  const BudgetStore = db.createObjectStore("BudgetStore", {
    keyPath: "budgetID",
    autoIncrement:true
  });
  BudgetStore.createIndex("amounts", "amount")
  BudgetStore.createIndex("status", "status")
};

request.onsuccess = function (event) {
  db = event.target.result;

  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function (event) {
  // log error here
  console.log(event.target.error)
};

function saveRecord(record) {
  // create a transaction on the pending db with readwrite access
  // access your pending object store
  // add record to your store with add method.


 db = request.result;
        const transaction = db.transaction(["BudgetStore"], "readwrite");
        const budgetStore = transaction.objectStore("BudgetStore");
        const statusIndex = budgetStore.index("status");
        const amountIndex = budgetStore.index("amounts")
        
        budgetStore.add({listId: "1", amount:"$1,000,000", status: "over"});
        budgetStore.add({listId: "2", amount:"$1,500,000", status: "on-target"});
        budgetStore.add({listId: "3", amount:"$1,750,000", status: "under"});
        budgetStore.add({listId: "4", amount:"$2,000,000", status: "under"});
}

function checkDatabase() {
  // open a transaction on your pending db
  // access your pending object store
  // get all records from store and set to a variable

  const getAll = budgetStore.getAll()
  getAll.onsuccess = function () {
    if (getAll.result.length > 0) {
      fetch('/api/transaction/bulk', {
        method: 'POST',
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then(() => {
          // if successful, open a transaction on your pending db
          // access your pending object store
          // clear all items in your store
          response.onsuccess = () => {



          }


        });
    }
  };
}

// listen for app coming back online
window.addEventListener('online', checkDatabase);
