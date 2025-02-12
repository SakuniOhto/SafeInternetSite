function toggleSwitch() {
    const container = document.querySelector('.toggle-container');
    const status = container.classList.toggle('active');
    const button = $('.toggle-button')
    if (status) {
        button.css('background-color', '#c7fbff')
    } else {
        button.css('background-color', '#FBDFFF')
    }
}