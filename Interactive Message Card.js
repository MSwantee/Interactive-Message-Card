// SELECT: Grab the items from the page so we can use them
const card = document.getElementById('card');
const msg = document.getElementById('msg');
const input = document.getElementById('in');
// SHOW: Put the typed text into the card and make it pop up
function show() {
    msg.textContent = input.value;
    card.style.display = "block";
}
// COLOR: Use JavaScript to "paint" the card a new color
function color() {
    card.style.backgroundColor = "lightblue";
    card.style.color = "darkblue";
}
// CREATE: Build a new paragraph from scratch and "glue" it inside the card
function add() {
    if (!document.getElementById('note')) {
        const p = document.createElement('p');
        p.id = "note";
        p.textContent = "Extra note!";
        card.appendChild(p);
    }
}
// REMOVE: Find the extra note and delete it from the page
function del() {
    const p = document.getElementById('note');
    if (p) p.remove();
}
// RESET: Wipe everything clean and hide the card again
function reset() {
    input.value = "";              // Clear the typing box
    msg.textContent = "";          // Clear the card message
    card.style.display = "none";   // Hide the card
    card.style.backgroundColor = ""; // Reset color
    del();                         // Run the delete function above
}