document.addEventListener("DOMContentLoaded", function() {
    const openMod = document.getElementById("mainTitle");
    const closeMod = document.getElementById("closeMod");
    const modal = document.getElementById("modContainer");
    const linkedIn = document.getElementById("liLogo")
    const gitHub = document.getElementById("ghLogo")

    openMod.addEventListener('click', function () {
        modal.style.display = "flex";
    })

    closeMod.addEventListener('click', function() {
        modal.style.display = "none";
    })

    linkedIn.addEventListener('click', function() {
        window.location.href = "https://www.linkedin.com/in/billy-remsen-b0969a120/"
    })

    gitHub.addEventListener('click', function() {
        window.location.href = "https://github.com/wremsen"
    })
})