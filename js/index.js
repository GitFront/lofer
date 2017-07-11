window.onload = function () {
    // 顶级Tab
    var rootSwiper = new Swiper('.root-container', {
        pagination: '.root-pagination',
        paginationClickable: true
    });
    // 首页顶部Tab
    var rootASwiper = new Swiper('.rootA-container', {
        pagination: '.rootA-pagination ',
        paginationClickable: true
    });
    // 消息
    var rootCSwiper = new Swiper('.rootC-container', {
        pagination: '.rootC-pagination ',
        paginationClickable: true
    });
    // 订阅滑动
    var rootAActiveSwiper = new Swiper('.rootA-active-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true,
        roundLengths: true, //防止文字模糊
    });
    // 发现banner轮播图
    var rootBActiveSwiper = new Swiper('.rootB-active-swiper-container', {
        pagination: '.rootB-active-pagination',
        paginationClickable: true,
        loop: true,
        autoplay: 5000,
    });
    var rootBActive1Swiper = new Swiper('.rootB-active1-swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 0,
            stretch: -50,
            depth: 100,
            modifier: 1,
            slideShadows: false,


        }
    });
    //  发现滑动
    var rootAActiveSwiper = new Swiper('.rootB-hua-swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true,
        roundLengths: true, //防止文字模糊
    });
    // 首页订阅滑动
    var rootAHuaSwiper = new Swiper('.rootA-hua-swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true,
        roundLengths: true, //防止文字模糊
    });

    // 你可能感兴趣轮播
    var interestSwiper = new Swiper('.interest-swiper-container', {
        spaceBetween: 20,
        freeMode: true,
        slidesPerView: 'auto',
        noSwiping: false,
        loop:true,
        loopedSlides:12
    })


    // 我的滑动
     var rootDHuaSwiper = new Swiper('.rootD-hua-swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true,
        roundLengths: true, //防止文字模糊
    });

    // 消息-动态滑动
     var rootCHuaSwiper = new Swiper('.rootC-hua-swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true,
        roundLengths: true, //防止文字模糊
    });
    // 消息-消息页滑动
     var rootCInfoHuaSwiper = new Swiper('.rootC-info-swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true,
        roundLengths: true, //防止文字模糊
    });
    // 消息-聊天页滑动
     var rootCInfoHuaSwiper = new Swiper('.rootC-info-chat-swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true,
        roundLengths: true, //防止文字模糊
    });



}