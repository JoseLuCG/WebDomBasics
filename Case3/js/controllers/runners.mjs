import {compareRunners} from "../auxiliar/comparators.mjs"

export function dataToHTMLList (array) {
    array.sort(compareRunners)
    const HTMLElements = array.map(
        (item) => {
            const li = document.createElement("li");
            li.innerText = `Nombre: ${item.name} - Tiempo: ${item.time}.`;
            return li;
        }
    )
    document.querySelector("#list").append(...HTMLElements);
}