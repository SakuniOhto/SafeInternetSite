function toggleSwitch() {
    const container = document.querySelector('.toggle-container');
    const status = container.classList.toggle('active');
    const button = $('.toggle-button')
    if (status) {
        button.css('background-color', '#c7fbff') // синий
        $('#card1, #card2, #card3').css('display','none')
        $('#card4, #card5, #card6').css('display','unset')
    } else {
        button.css('background-color', '#FBDFFF') // розовый
        $('#card1, #card2, #card3').css('display','unset')
        $('#card4, #card5, #card6').css('display','none')
    }
}


$(document).ready(function() {
    let $items = $('.slider .item');
    let $next = $('#next');
    let $prev = $('#prev');
    let active = 3;

    function loadShow() {
        let stt = 0;
        $items.eq(active).css({
            'transform': 'none',
            'z-index': '1',
            'filter': 'none',
            'opacity': 1
        });
        
        for (let i = active + 1; i < $items.length; i++) {
            $items.eq(i).css({
                'transform': `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`,
                'z-index': -stt,
                'filter': 'blur(2px)',
                'opacity': stt > 2 ? 0 : 0.6
            });
        }

        stt = 0;
        for (let i = active - 1; i >= 0; i--) {
            $items.eq(i).css({
                'transform': `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`,
                'z-index': -stt,
                'filter': 'blur(2px)',
                'opacity': stt > 2 ? 0 : 0.6
            });
        }
    }
    loadShow();
    $next.onclick = function(){
        active = active + 1 < items.length ? active + 1 : active;
        loadShow()
    }
    $prev.onclick = function(){
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow()
    }
});
