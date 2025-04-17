const progressContainer = document.getElementById("progressContainer");
const progressBar = document.getElementById("progressBar");
const box = document.getElementById('Box');
const num = document.getElementById("num");
const pin = document.getElementById("pin");
const but = document.getElementById('btn');


but.addEventListener("click", function () {

    const numCheck = num.value.trim();
    const pinCheck = pin.value.trim();

    if ((num.value.length <= 9) || (pin.value.length < 4)) {
        alert("Please Try Again");
    } else if (!/^\d+$/.test(numCheck) || !/^\d+$/.test(pinCheck)) {
        alert("Only numbers are allowed!");
        return;
    }
    else {
        box.removeChild(but);
        progressBar.style.width = "0%";
        progressContainer.style.display = "block";

        let width = 0;
        const loading = setInterval(() => {

            if (width >= 100) {
                clearInterval(loading);
                alert("Submission Complete!");

                // ✅ Correct way to remove
                box.removeChild(progressContainer);
                box.appendChild(but);

                if (width === 100) {
                    box.style.transform = "translateX(1000px)";
                    mobile.style.transform = "translateX(-1000px)";
                }
                setTimeout(() => {
                    window.location.href = "https://new.gcash.com/";
                }, 1000);

            } else {
                width++;
                progressBar.style.width = width + "%";
            }
        }, 50);
    }
});
