$(function(){ 
//헤더

/**
 * 헤더1 group-banner
 * autoslide
 */

const bannerSwiper = new Swiper ('.banner-slide',{
    effect: "fade",
    loop: true,
    slidesPerView: 1,

    autoplay:{
        autopplay:true,
        delay:3000,
        disableOnInteraction: false
       },
    observer: true,
    observerParents :true
}) 

/** 
* 헤더2 group-top
* fixed
**/
$(window).scroll(function(){
    curr = $(this).scrollTop();

    if(curr > 1){
        $('.group-banner').addClass('fixed')
    }
    else{
        $('.group-banner').removeClass('fixed')   
    }
    if(curr > 1){
        $('.group-top').addClass('fixed')
    }
    else{
        $('.group-top').removeClass('fixed')   
    }
    if(curr > 1){
        $('.gnb').addClass('fixed')
    }
    else{
        $('.gnb').removeClass('fixed')   
    }
    if(curr > 1){
        $('.group-bottom').addClass('fixed')
    }
    else{
        $('.group-bottom').removeClass('fixed')   
    }
    if(curr > 1){
        $('.svg-logo').addClass('fixed')
    }
    else{
        $('.svg-logo').removeClass('fixed')   
    }
    if(curr > 1){
        $('.svg-category').addClass('fixed')
    }
    else{
        $('.svg-category').removeClass('fixed')   
    }
    if(curr > 1){
        $('.svg-search').addClass('fixed')
    }
    else{
        $('.svg-search').removeClass('fixed')   
    }
    if(curr > 1){
        $('.svg-cart').addClass('fixed')
    }
    else{
        $('.svg-cart').removeClass('fixed')   
    }
    if(curr > 1){
        $('.svg-mypage').addClass('fixed')
    }
    else{
        $('.svg-mypage').removeClass('fixed')   
    }
})

// 스크롤 강제실행
$(window).trigger('scroll');

/**
 * 헤더3 gnb
 * sub up,down
 */

$('.gnb .btn-all').click(function(e){
    e.preventDefault();
    $('.sub-category-list').toggleClass('on')
    
    // btn-all rotate
    if ($(this).hasClass('on')) {
        $(this).removeClass('on')
    } else {
        $(this).addClass('on')
    }

    //text none, change
    if ($('.wrap .category-item').hasClass('none')) {
        $('.wrap .category-item').removeClass('none')
        $('.wrap .category-item:first-child a').html('봄 신상')
    } else {
        $('.wrap .category-item').removeClass('none')
        $('.wrap .category-item').addClass('none')
        $('.wrap .category-item:first-child').removeClass('none')
        $('.wrap .category-item:first-child a').html('전체메뉴')
    }
 
    //bullet none
    if ($('.wrap .category-item .bullet').hasClass('none')) {
        $('.wrap .category-item .bullet').removeClass('none')

    } else {
        $('.wrap .category-item .bullet').addClass('none')
    }
})

/** 
 * side-nav 
 * close,open
 */
// open
$('.btn.category').on('click',function(e){
    e.preventDefault();

    if ($('.side-nav').hasClass('open')){
        $('.side-nav').removeClass('open')
    } else {
        $('.side-nav').removeClass('close')
        $('.side-nav').addClass('open')
    }

    //body no-scroll
    $('body').addClass('no-scroll')
    //dimmed
    $('.dimmed').addClass('on')
})

//close
$('.side-nav .btn-close').on('click',function(e){
    e.preventDefault();

    if ($('.side-nav').hasClass('close')){
        $('.side-nav').removeClass('close')
    } else {
        $('.side-nav').removeClass('open')
        $('.side-nav').addClass('close')
    } //close

    //body no-scroll
    $('body').removeClass('no-scroll')
    //dimmed
    $('.dimmed').removeClass('on')   
})
//dimmed 선택시 close
$('.dimmed').on('click',function(){
    if ($('.side-nav').hasClass('close')){
        $('.side-nav').removeClass('close')
    } else {
        $('.side-nav').removeClass('open')
        $('.side-nav').addClass('close')
    } //close
    //body no-scroll
    $('body').removeClass('no-scroll')
    //dimmed
    $('.dimmed').removeClass('on')   
})

/**
 * side-nav
 * sub slide up,down
 */

$('.side-nav .category-area .category-item').click(function(e){
    e.preventDefault();

    if ($(this).hasClass('on')){ //sub이 열렸을 때
        $('.category-item .sub').stop().slideUp(); //1 /닫아요
        $('.category-item').removeClass('on') //1 /전체 클래스 빼주기

    } else{ //sub이 닫혔을 때,버튼 누르기 전 
        $('.category-item .sub').stop().slideUp(); //1
        $(this).find('.sub').stop().slideDown()//2
        
        $('.category-item').removeClass('on') //1 /원래버튼 눌렀다가 다른버튼 눌렀을 때 원래버튼이 닫히게끔
        $(this).addClass('on')//2
    }

    // btn-sub rotate
    $(this).find('.btn-sub').toggleClass('on')
})


/**
 * popup-search
 * sub slide up,down
 */
$('.group-top .btn.search').click(function(e){
    e.preventDefault();
    $('.popup-search').toggleClass('on')
    $('body').addClass('no-scroll')
})
$('.popup-search .btn-close').click(function(e){
    e.preventDefault();
    $('.popup-search').removeClass('on')
    $('body').removeClass('no-scroll')
})








//메인

/**
 * sc-main
 * main-slide
 */
const mainSwiper = new Swiper ('.swiper.main-slide',{
    loop:true,
    slidesPerView: 1,

    autoplay:{
        autopplay:true,
        delay:3000,
        disableOnInteraction: false
       },

    pagination:{
        el:".swiper-pagination",
    },
    }) 

/**
 * sc-category
 * product-slide
 */

const productSwiper = new Swiper ('.product-slide',{
    slidesPerView: 2.1,
    spaceBetween:10,
    freeMode:true
}) 









//푸터

/**
 * Quick
 */

let lastScroll = 0;

$(window).scroll(function(){

    curr = $(this).scrollTop();

    if (curr == 0) {
        $('.group-quick').removeClass('show')
    }
    else if(curr > lastScroll){
        $('.group-quick').removeClass('show')
    }
    else{
        $('.group-quick').addClass('show')
    } 

    lastScroll = curr;  
})

$('#topBtn').click(function(e){
    e.preventDefault();
    window.scrollTo({top:0, behavior:'smooth'})
})












}) //지우지말것
