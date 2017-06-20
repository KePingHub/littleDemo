/**
 * Created by Administrator on 2017/6/17.
 */
$(function () {
    let loadingImgs = ["img/activity_rule.png", "img/bg.jpg", "img/bg2.png", "img/close.png", "img/p1_btns_wrap.png", "img/p1_first.png", "img/p1_from.png", "img/p1_second.png", "img/p1_sub.png", "img/p1_third.png", "img/p2_kuang.png", "img/p2_qian.jpg", "img/p2_scoring.png", "img/p2_shou.png", "img/p2_txt1.png", "img/p2_txt2.png", "img/p2_txt3.png", "img/p2_zhuan.png", "img/p3_acquire.png", "img/p3_again.png", "img/p3_bg.jpg", "img/p3_share.png", "img/p3_share_btn.png", "img/prize.png", "img/qian.png", "img/ranking.png", "img/ranking_bg.png", "img/shiyong.png", "img/shizhong.png", "img/shou.png", "img/start_game.png", "img/tiaozhan.png", "img/yinqu.png"];
    loadingImgs.forEach(function (ele,index) {
        let imgObj = new Image();
        imgObj.src = ele;
        // $("body").append(imgObj);
        imgObj.onload = function () {
            let scale = parseInt((index + 1)/loadingImgs.length * 100);
            $("#loading").html(scale + "%");
            if(scale >= 100){
                $("#loading_wrap").hide();
            }
            init();
        }
    });
    function init() {
        $("#start_page").show();
        touch.on(".start_btn","tap",function () {
            $(".userData").show();
            $(".sub_btn").on("touchstart",function (e) {
                e.preventDefault();
                subSuccess();
            })
        });
        touch.on(".close","tap",function () {
            $(".close").parent().hide();
        });
        touch.on(".sub_btn","tap",function () {
            $(".userData").hide();
        });
        touch.on("#img_rank","tap",function () {
            $("#ranking_wrap").show();
        });
        touch.on("#img_rule","tap",function () {
            $("#activity_rule").show();
        });
        touch.on("#img_prize","tap",function () {
            $("#prize").show();
        });
        touch.on("#img_use","tap",function () {
            $("#instructions").show();
        });
    }

    function subSuccess() {
        let $game_page = $("#game_page");
        let $money_wrap = $("#money_wrap");
        $("#start_page").hide();
        $game_page.show();
        let $img = $(".p2_text>img");
        let imgCount = 0;
        let $imgArr = ["img/p2_txt1.png", "img/p2_txt2.png", "img/p2_txt3.png"];
        let moneyNum = 0;//数的钱数
        let downTime = 60;//倒计时
        let $counts = $(".count");
        let timepiece = false;//是否开启倒计时
        setInterval(function () {
            imgCount++;
            imgCount = imgCount > $imgArr.length - 1 ? 0 : imgCount;
            $img.attr("src",$imgArr[imgCount]);
        },2000);
        touch.on($money_wrap,"touchstart",function (e) {
            e.preventDefault();
        });
        touch.on($money_wrap,"swipeup",function (e) {
            timepiece = true;
            $(".p2_hand").hide();
            moneyNum++;
            let gewei,shiwei,baiwei;//显示钱的数量
            let newMoney = $("<img class='p2_new_money' src='./img/p2_qian.jpg'>");
            $money_wrap.append(newMoney);//添加新钱
            gewei = moneyNum % 10;
            shiwei = (moneyNum % 100 - gewei) / 10;
            baiwei = (moneyNum % 1000 - shiwei * 10 - gewei) / 100;
            $($counts[0]).html(baiwei);
            $($counts[1]).html(shiwei);
            $($counts[2]).html(gewei);
            setTimeout(function () {//移除数过的钱
                newMoney.remove();
            },800);
        });
        let timer = setInterval(function () {//倒计时
            if(timepiece){
                downTime--;
                if(downTime <= 0){
                    clearInterval(timer);
                }
                $(".timepiece").html(downTime);
            }
        },1000);
    }
});