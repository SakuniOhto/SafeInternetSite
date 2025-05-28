function toggleSwitch() {
    const container = document.querySelector('.toggle-container');
    const status = container.classList.toggle('active');
    const button = $('.toggle-button')
    if (status) {
        button.css('background-color', '#c7fbff') // синий
        $('#card1, #card2, #card3').css('display', 'none')
        $('#card4, #card5, #card6').css('display', 'unset')
    } else {
        button.css('background-color', '#FBDFFF') // розовый
        $('#card1, #card2, #card3').css('display', 'unset')
        $('#card4, #card5, #card6').css('display', 'none')
    }
}
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 50) {
        $(".header").css({
            "-webkit-box-shadow": "0 5px 25px rgba(0, 0, 0, 0.15)",
            "box-shadow": "0 5px 25px rgba(0, 0, 0, 0.15)",
        });
    } else {
        $(".header").css({
            "-webkit-box-shadow": "none",
            "box-shadow": "none",
        });
    }
});