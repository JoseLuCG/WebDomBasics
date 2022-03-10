export function dataToHTMLList (array) {
    const HTMLElements = array.map(
        (item) => {
            const li = document.createElement("li");
            li.innerText = `Importe: ${item/2} puntos.`;
            return li;
        }
    )
    document.querySelector("#list").append(...HTMLElements);
}