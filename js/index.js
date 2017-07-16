window.onload = function () {
    //banner
    var mySwiper = new Swiper('.swiper-container1', {
        autoplay: 1000,//可选选项，自动滑动
        speed:300,
        autoplayDisableOnInteraction : false,
        touchAngle : 20,
        pagination : '.swiper-pagination',
        loop : true,

    });
    //头条
    var mySwiper2 = new Swiper('.swiper-container2', {
        autoplay: 1000,//可选选项，自动滑动
        direction : 'vertical',
        loop : true,

    });

    //掌上抢
    var mySwiper3 = new Swiper('.swiper-container3',{

        resistanceRatio : 0.1,
        resistance : true, //继续拖动Swiper会离开边界，释放后弹回。
        slidesPerView : 3,
        spaceBetween : 10,
    });

    //广告图
    slide('.swiper-container4');
    slide('.swiper-container5');
    function slide(obj){
        var mySwiper4 = new Swiper(obj, {

            autoplay: 1000, //可选选项，自动滑动
            speed:500, // slide 运动的速度
            autoplayDisableOnInteraction : false, //用户操作swiper之后，是否禁止autoplay。默认为true：停止。
            touchAngle : 20, // 允许触发拖动的角度值。默认45度，即使触摸方向不是完全水平也能拖动slide。
            pagination : '.swiper-pagination', // 分页器

            loop : true,
        });
    };


    //倒计时
    var timer;
    var endtime = new Date();
    endtime.setFullYear(2017);
    endtime.setMonth(6);
    endtime.setDate(9);
    endtime.setHours(0);
    endtime.setMinutes(0);
    endtime.setSeconds(0);
    //获取结束的时间的毫秒数
    var end =  endtime.getTime();
    var iHour = document.querySelector('#hour');
    var iMin = document.querySelector('#min');
    var iSec = document.querySelector('#sec');
    changetime ();

    function changetime () {
        var newtime = new Date();
        var sec = (end-newtime.getTime())/1000;
        if(sec>0){
            //获取小时
            var h = Math.floor(sec/3600);
            //获取分钟
            var m = Math.floor(sec%3600/60);
            //获取秒数
            var s = Math.floor(sec%60);
            iHour.innerHTML = zero(h,2);
            iMin.innerHTML = zero(m,2);
            iSec.innerHTML = zero(s,2);
        }else{
            clearInterval(timer);
        }

    };
    timer = setInterval(function () {
        changetime();
    },1000);
   //补零
    function zero(time,n) {
        var str = ""+time;
        while(str.length<n){
            str =  "0"+time;
        }
        return str
    }




};


