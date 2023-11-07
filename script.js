console.log("Yes Your are there")
import { appendItemsToShoppingListEl, resetInputField, resetShoppingEl } from './function.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js"; 
import { getDatabase, ref, push, onValue, remove  } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";


const appSettings = {
    databaseURL: "https://realtimedb-41723-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSettings);
const database = getDatabase(app);


const inputField = document.getElementById("inputField");
const shoppingListDB = ref(database, "shoppingListDB");
const shoppingListEl = document.querySelector(".cardsMain");

onValue(shoppingListDB, (snapshot)=>{
    let checkSnapshotAvailability= (snapshot.exists())

    if (!checkSnapshotAvailability == false) {
        
        let itemsArray = Object.entries(snapshot.val());
        resetShoppingEl(shoppingListEl);
        for (let index = 0; index < itemsArray.length; index++) {
            const shoppingList = itemsArray[index];
    
            let currentItemId = shoppingList[0];
            let currentItemName = shoppingList[1];
        
    
    
    
            console.log(shoppingList)
            appendItemsToShoppingListEl(shoppingList, shoppingListEl, database, ref, remove)
    
            // appendItemsToShoppingListEl(currentItemId, shoppingListEl)
            
        }
    }
    else{
        shoppingListEl.innerHTML = "Its Empty"
    }

})

let addBtn = document.getElementById("addButton");
addBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(!inputField.value == ""){
        console.log("Input field is not empty")
        
        let userInput = inputField.value;
        
        push(shoppingListDB, userInput)
        resetInputField(inputField)
        
        console.log(`${userInput} was added to database `)
    }
    else{
        alert("Please Write Alphabet or Numbers :)")
    }
}
)
