container = document.querySelector("#container");

let gridSize = 16;

function createGrid (gridSize) {
    for (let i = 0; i < gridSize; i++) {

        const newContainer = document.createElement("div");
        newContainer.classList.add("outer");
        container.appendChild(newContainer);

        for (let z = 0; z < gridSize; z++) {

            const divs = document.createElement("div");
            divs.textContent = "";
            divs.classList.add("square");
            divs.addEventListener("mouseenter", () => {
                divs.style.backgroundColor = "blue";
            });
            newContainer.appendChild(divs);
        }
    }
}

const button = document.querySelector("button");

button.addEventListener("click", () => {

    const wrapper = document.querySelector("#big");
    wrapper.removeChild(container)

    let newGrid = prompt("Please Enter a new grid size # x #");

    while (true) {

        if (newGrid > 100) {
            newGrid = prompt("Pick a number less than or equal to 100!")
        } else {
            break;
        }
    }

    container = document.createElement("div");
    container.id = "container"
    wrapper.appendChild(container);

    createGrid(newGrid);
});


createGrid(gridSize);