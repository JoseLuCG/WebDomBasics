function toggleShowCompletedHandler (event) {
    const completedElements = document.querySelectorAll(".completed");
    for ( let item of completedElements ) {
        item.classList.toggle("hidden");
    }
}

const buttonToDelete = document.querySelector("#TaskDeleter");
buttonToDelete.addEventListener("click", toggleShowCompletedHandler);