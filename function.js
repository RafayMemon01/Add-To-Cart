export function appendItemsToShoppingListEl( value, parentEl,database, ref, remove){
    let itemId = value[0]
    let itemValue = value[1]

    console.log(itemId)

    const li = document.createElement("li");
    li.textContent = itemValue;
    li.setAttribute("title", "Click Me To Remove")
    parentEl.appendChild(li);

    li.addEventListener("click", (e)=>{
        e.preventDefault()
        console.log(itemId)
        let exactLocationOfDataInDB = ref(database,`shoppingListDB/${itemId}`)
        console.log(exactLocationOfDataInDB)
        remove(exactLocationOfDataInDB)

    })

}
export function resetInputField(inputField){
    inputField.value = "";

}
export function resetShoppingEl(shoppingListEl){
    shoppingListEl.innerHTML = "";
}


// export default appendItemsToShoppingListEl