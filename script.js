
document.getElementById("heart").addEventListener("change", function(e) {
    var selectedOption = e.target.value;
    switch(selectedOption) {
        case "140p":
            document.querySelector("#image1").style.opacity = 1;
            document.querySelector("#image2").style.opacity = 0;
            document.querySelector("#image3").style.opacity = 0;
            document.querySelector("#image4").style.opacity = 0;
            break;
        case "480p":
            document.querySelector("#image1").style.opacity = 0;
            document.querySelector("#image2").style.opacity = 1;
            document.querySelector("#image3").style.opacity = 0;
            document.querySelector("#image4").style.opacity = 0;
            break;
        case "720p":
            document.querySelector("#image1").style.opacity = 0;
            document.querySelector("#image2").style.opacity = 0;
            document.querySelector("#image3").style.opacity = 1;
            document.querySelector("#image4").style.opacity = 0;
            break;
        case "1080p":
            document.querySelector("#image1").style.opacity = 0;
            document.querySelector("#image2").style.opacity = 0;
            document.querySelector("#image3").style.opacity = 0;
            document.querySelector("#image4").style.opacity = 1;
            break;
        default:
            console.log("Unknown resolution");
    }
});
