export function dataToHTMLList (array) {
    const HTMLElements = array.map(
        (item) => {
            const row = document.createElement("tr");
            const tdName = document.createElement("td");
            const tdTime = document.createElement("td");
            row.append(tdName, tdTime);
            tdName.innerText = item.name;
            tdTime.innerText = item.time;
            return row;
        }
    )
    document.querySelector("#runnersRows").append(...HTMLElements);
}