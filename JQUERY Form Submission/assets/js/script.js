var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function formSubmission(event) {
event.preventDefault();
var addedItem = $('input[name="shopping-input"]').val();
var liEl = $("<li>",)
liEl.text(addedItem)

if (addedItem === null|| addedItem === "") {
    alert("Please enter an item")
    return
};
console.log(addedItem)
shoppingListEl.append(liEl)

$('input[name="shopping-input"]').val('')
}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', formSubmission)