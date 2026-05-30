const container = document.querySelector("#container");




const divs = document.createElement("div");
divs.textContent = "test";


for (let i = 0; i < 16; i++) {
    for (let z = 0; z < 16; z++) {
        const divs = document.createElement("div");
        divs.textContent = "test";
        container.appendChild(divs);
    }
}