function changeTheme() {
    const btn = document.querySelector('.banner-btn');
// Отслеживаем щелчок по кнопке
    btn.addEventListener('click', function() {
        // Затем переключаем (добавляем/удаляем) класс .dark-theme для body
        document.body.classList.toggle('body-dark');
    })
}
