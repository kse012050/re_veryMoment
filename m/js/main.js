$(document).ready(function(){
    var interviewIframeNumber;
    $('.interviewArea ul li').click(function(){
        console.log($(this).index());
        interviewIframeNumber = $(this).index();
        $('.interviewIframeArea').addClass('active');
        $('.interviewIframeArea li').removeClass('active');
        $('.interviewIframeArea li').eq($(this).index()).addClass('active');
        $("body").addClass('active');
    });

    $('.interviewIframeArea li i').click(function(){
        $(".interviewIframeArea li .interviewIframe")[interviewIframeNumber].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        $('.interviewIframeArea').removeClass('active');
        $('.interviewIframeArea li').removeClass('active');
        $("body").removeClass('active');
    });

    $('.interviewIframeArea').click(function(){
        $(".interviewIframeArea li .interviewIframe")[interviewIframeNumber].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        $('.interviewIframeArea').removeClass('active');
        $('.interviewIframeArea li').removeClass('active');
        $("body").removeClass('active');
    });

    $('.bannerArea div a').click(function(e){
        e.preventDefault();
        var offset = $('footer').offset();
        $('html, body').animate({scrollTop : offset.top}, 400);
    });
});