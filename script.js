// Change text and styles
document.getElementById("changeBtn").addEventListener("click", () => {
    const title = document.getElementById("main-title");
    const desc = document.getElementById("description");

    title.textContent = "DOM Manipulation is cool 😎";
    desc.textContent = "You have just changed the DOM!";

    title.style.color = "purple";
    desc.style.fontWeight = "bold";
});


// Add or remove an element
let elementAdded = false;

document.getElementById("addRemoveBtn").addEventListener("click", () => {
    const container = document.getElementById("container");

    if (!elementAdded) {
        const newEl = document.createElement("p");
        newEl.id = "newPara";
        newEl.textContent = "🎉 Hurray!, a new element has been added!";
        container.appendChild(newEl);
        elementAdded = true;
    } else {
        const oldEl = document.getElementById("newPara");
        if (oldEl) {
            container.removeChild(oldEl);
        }
        elementAdded = false;
    }
});

