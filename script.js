const container = document.querySelector("#container");




const divs = document.createElement("div");
divs.textContent = "test";

for (let i = 0; i < 16; i++) {
    const divs = document.createElement("div");
    divs.textContent = "test";
    container.appendChild(divs);
}