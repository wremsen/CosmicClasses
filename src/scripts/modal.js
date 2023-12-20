document.addEventListener("DOMContentLoaded", function() {
    const openMod = document.getElementById("openMod");
    const closeMod = document.getElementById("closeMod");
    const modal = document.getElementById("modContainer");

    openMod.addEventListener('click', function () {
        modal.style.display = "flex";
    })

    closeMod.addEventListener('click', function() {
        modal.style.display = "none";
    })
})