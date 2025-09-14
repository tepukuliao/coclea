document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-skins");
    const skinButtonsDiv = document.getElementById("skin-buttons");

    toggleButton.addEventListener("click", () => {
        if (skinButtonsDiv.style.display === "none") {
            skinButtonsDiv.style.display = "block";
        } else {
            skinButtonsDiv.style.display = "none";
        }
    });
});
