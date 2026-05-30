const container = document.querySelector("#container");


for (let i = 0; i < 16; i++) {
    const newContainer = document.createElement("div");
    container.appendChild(newContainer);
    for (let z = 0; z < 16; z++) {
        const divs = document.createElement("div");
        divs.textContent = "";
        divs.classList.add("square");
        newContainer.appendChild(divs);
    }
}