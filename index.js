const input = document.querySelector("input");
const addBtn = document.querySelector(".btnAgregar");
const ul = document.querySelector("ul");
const listaVacia = document.querySelector(".listaVacia");

addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const text = input.value;

    if (text !== "") {
        const li = document.createElement("li");
        const p = document.createElement("p");

        p.textContent = text;

        li.appendChild(p);
        ul.appendChild(li);

        li.appendChild(addBtnBorrar());

        input.value = "";
        listaVacia.style.display = "none";
    }

})

function addBtnBorrar() {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    
    deleteBtn.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll("li");
        if (items.length === 0) {
            listaVacia.style.display = "block";
        }
    });
    
    return deleteBtn
}