const btn = document.querySelector(".banner-btn");
const theme = document.querySelector("#theme-link");
btn.addEventListener("click", function() {
    if (theme.getAttribute("href") == "@@webRoot/assets/css/main.min.css?v21022020") {
        theme.href = "@@webRoot/assets/css/main-dark.min.css?v21022020";
    } else {
        theme.href = "@@webRoot/assets/css/main.min.css?v21022020";
    }
});
