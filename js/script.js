// 置頂鍵
window.onscroll = function () {
    var e = document.getElementById("scrolltop");
    if (!e) {
        e = document.createElement("a");
        e.id = "scrolltop";
        e.href = "#";
        document.body.appendChild(e);
    }
    e.style.display = "block";
    e.onclick = (ev) => {
        ev.preventDefault();
        document.documentElement.scrollTop = 0;
    };
};







$(document).ready(function () {

    // 選單預設和點擊樣式
    // 在css要特別設一個.active的樣式
    $('.nav-link').click(function () {
        // 移除之前的活動類別
        $('.nav-link').removeClass('active');
        // 添加當前點擊的菜單項的活動類別
        $(this).addClass('active');
    });



    // 點選漢堡後自動顯示menu
    $('#mymenu').on('click', function (event) {
        var navbar = $('.navbar');
        navbar.toggleClass('menued').removeClass('closed');
        event.stopPropagation();
    });

    $('#close').on('click', function () {
        $('.navbar').toggleClass('closed').removeClass('menued');
    });

    // 點選項目後自動收合
    $(".navbar a").click(function () {
        hideOverlay();
    });

    function hideOverlay() {
        $(".navbar").addClass("closed").removeClass("menued");
    }

    // 初始化時調整一次
    // adjustMiddleHeight();


    // Hero_輪播不停止
    $('.carousel').carousel({ pause: false });


});




// 產品說明頁_Swiper
var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        // 當視窗寬度大於等於 768px 時
        768: {
            direction: 'vertical', // 使用垂直方向
        },
        // 當視窗寬度小於 768px 時
        0: {
            direction: 'horizontal', // 使用水平方向
        }
    }
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});






