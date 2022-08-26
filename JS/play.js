/**
 * Play.html JS
 */

var notes = [];
var rhythm = [];
window.onload = function () {
    console.log("I am here");
    let color = [];
    const options = {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
    };
    fetch("https://thawing-escarpment-90509.herokuapp.com/getPalette", options)
        .then((res) => res.json())
        .then((res) => {
            console.log(res["palette"]);
            color.push(...res["palette"]);
            displayBoxes(color);
        })
        .then((res) => {
            fetch(
                "https://thawing-escarpment-90509.herokuapp.com/getnotes",
                options
            )
                .then((res) => res.json())
                .then((res) => {
                    console.log(`INSIDE SCRIPT.JS`, res);
                    notes.push(...res["notes"]);
                    console.log(notes);
                    rhythm.push(notes[0]);
                    rhythm.push(notes[2]);
                    rhythm.push(notes[4]);

                    rhythm.push(notes[1]);
                    rhythm.push(notes[3]);
                    rhythm.push(notes[5]);

                    rhythm.push(notes[2]);
                    rhythm.push(notes[4]);
                    rhythm.push(notes[6]);

                    rhythm.push(notes[1]);
                    rhythm.push(notes[4]);
                    rhythm.push(notes[6]);
                });
        });
};
function goToHome() {
    window.location.replace("index.html");
}
function displayBoxes(color) {
    let height = window.innerWidth < 1200 ? "190px" : "120px";
    let div = "";
    for (let i in color) {
        console.log(color[i]);
        div +=
            "<div style='box-shadow: 8px 8px 10px 1px rgba(0, 0, 0, .5);margin-right:30px;height:" +
            height +
            ";width: 75px;background-color:" +
            color[i] +
            ";' class='color-boxes'></div>";
    }
    // console.log(div)
    document.getElementById("boxes").innerHTML = div;
}
function playMusic() {
    for (let i = 0; i < rhythm.length; i += 3) {
        let first, second, third;
        setTimeout(function () {
            console.log(rhythm[i], rhythm[i + 1], rhythm[i + 2]);
            first = new Audio("./ASSETS/Sounds/" + rhythm[i] + ".mp3");
            second = new Audio("./ASSETS/Sounds/" + rhythm[i + 1] + ".mp3");
            third = new Audio("./ASSETS/Sounds/" + rhythm[i + 2] + ".mp3");
            first.play();
            second.play();
            third.play();
            // first.pause()
            // second.pause()
            // third.pause()
        }, 5 * i);
    }
}
