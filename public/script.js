
// Accedere alla fotocamera
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    var constraints = {
        video: { facingMode: "environment" }
    };
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function (stream) {
            var video = document.getElementById("videoFeed");
            video.srcObject = stream;
            video.play();
        })
        .catch(function (error) {
            console.log(
                "Si è verificato un errore nell'accesso alla fotocamera: " + error
            );
        });
} else {
    console.log("getUserMedia non supportato dal browser.");
}



