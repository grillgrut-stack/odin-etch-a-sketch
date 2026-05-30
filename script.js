container = document.querySelector("#container");



for (let i = 0; i < 64; i++) {
    const newContainer = document.createElement("div");
    newContainer.classList.add("outer");
    container.appendChild(newContainer);
    for (let z = 0; z < 64; z++) {
        const divs = document.createElement("div");
        divs.textContent = "";
        divs.classList.add("square");
        divs.addEventListener("mouseenter", () => {
            divs.style.backgroundColor = "blue";
        });
        newContainer.appendChild(divs);
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


    for (let i = 0; i < newGrid; i++) {

        const newContainer = document.createElement("div");
        newContainer.classList.add("outer");
        container.appendChild(newContainer);

    for (let z = 0; z < newGrid; z++) {

        const divs = document.createElement("div");
        divs.textContent = "";
        divs.classList.add("square");
        divs.addEventListener("mouseenter", () => {
        divs.style.backgroundColor = "blue";
        });

        newContainer.appendChild(divs);
        }
    }
});


