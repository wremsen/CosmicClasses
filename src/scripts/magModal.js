document.addEventListener("DOMContentLoaded", function(){
    const openMagModal = document.getElementById("magnitudeChart");
    const closeMagMod = document.getElementById("closeMagModal");
    const magModal = document.getElementById("magModalContainer");

    openMagModal.addEventListener('click', function () {
        magModal.style.display = "flex";
    })
})