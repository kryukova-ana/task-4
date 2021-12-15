window.onload = function (){
    let btn = document.querySelector("button");
    console.log('test',btn);
    const theme = document.querySelector("#light");
    btn.addEventListener("click", function () {
        if (theme.getAttribute("href") == "@@webRoot/assets/css/main.min.css?v21022020") {
            theme.href = "@@webRoot/assets/css/main-dark.min.css?v21022021";
        } else {
            theme.href = "@@webRoot/assets/css/main.min.css?v21022020";
        }
    });

}