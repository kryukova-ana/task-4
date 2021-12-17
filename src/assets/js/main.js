window.onload = function (){
    let btn = document.querySelector("button");
    console.log('test',btn);
    const theme = document.querySelector("#light");
    btn.addEventListener("click", function () {
        if (theme.getAttribute("href") == "/assets/css/main.css") {
            theme.href = "/assets/css/main-dark.css";
        } else {
            theme.href = "/assets/css/main.css";
        }
    });

}