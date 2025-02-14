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
