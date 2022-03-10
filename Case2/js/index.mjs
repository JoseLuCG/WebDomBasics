const buttonX2 = document.querySelector("button");
//console.log(buttonX2);
const inputOfValueToModify = document.querySelector("input");
//console.log(inputOfValueToModify);

function fuctionButtonX2 (event) {
    const total = inputOfValueToModify.value*2;
    inputOfValueToModify.value = total;
}

buttonX2.addEventListener("click",fuctionButtonX2);
