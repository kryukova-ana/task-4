window.onload = function (){
    let img = document.querySelector(".theme-img");
    console.log('test',img);
    const theme = document.querySelector("#light");
    img.addEventListener("click", function () {
        if (theme.getAttribute("href") == "/assets/css/main.css") {
            theme.href = "/assets/css/main-dark.css";
            img.src="/assets/img/dark.png";
        } else {
            theme.href = "/assets/css/main.css";
            img.src="/assets/img/light.png";
        }
    });

}