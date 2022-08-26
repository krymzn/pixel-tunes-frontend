/**
 * Index.html JS
 */

window.onload = function () {
    fetch("https://thawing-escarpment-90509.herokuapp.com/delete-image", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(`Response from Notes`, res);
        })
        .catch((e) => {
            console.log("Error case" + e)
        });
};
function goToHome() {
    window.location.replace("index.html");
}
function goToAbout() {
    window.location.replace("About.html");
}

let readerResult;
function preview_image(event) {
    var reader = new FileReader();
    reader.onload = function () {
        var output = document.getElementById("output_image");
        output.src = reader.result;
        readerResult = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
    var element = document.getElementById("myDiv");
    element.style.display = "none";
    var element = document.getElementById("submit");
    element.style.display = "flex";
    element.style.justifyContent = "center";
    var elementPreview = document.getElementById("output_image");
    elementPreview.style.display = "block";
}

function submit_form(event) {
    var element = document.getElementById("overlay");
    element.style.display = "block";
    event.preventDefault();
    fetch("https://thawing-escarpment-90509.herokuapp.com/upload-image", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ file: readerResult }),
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(`Response from Notes`, res);
        })
        .then((res) => {
            window.location.replace("play.html");
        })
        .then((res) => {
            element.style.display = "none";
        })
        .catch((e) => {
            window.location.replace("error.html");
        });
}
