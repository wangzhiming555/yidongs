//1.透明轮播
function touming(box, img, btns, btn, left, right, color1, color2, t1) {
    var box = document.getElementsByClassName(box)[0];
    var img = document.getElementsByClassName(img);
    var dians = document.getElementsByClassName(btns)[0];
    var dian = dians.getElementsByTagName(btn);
    var left = document.getElementsByClassName(left)[0];
    var right = document.getElementsByClassName(right)[0];
    var flag = true;
    for (let i = 0; i < img.length; i++) {
        img[i].style.opacity = 0;
        dian[i].style.background = color2;
    }
    img[0].style.opacity = 1;
    dian[0].style.background = color1;
    var num = 0;
    var t = setInterval(fn1, t1);

    function fn1() {
        flag = false;
        num++;
        if (num == img.length) {
            num = 0;
        }
        for (let i = 0; i < img.length; i++) {
            animate(img[i], {opacity: 0}, function () {
                dian[i].style.background = color2;
            })
        }
        animate(img[num], {opacity: 1}, function () {
            dian[num].style.background = color1;
            flag = true;
        });
    }

    function fn2() {
        flag = false;
        num--;
        if (num == -1) {
            num = img.length - 1;
        }
        for (let i = 0; i < img.length; i++) {
            animate(img[i], {opacity: 0}, function () {
                dian[i].style.background = color2;
            })
        }
        animate(img[num], {opacity: 1}, function () {
            dian[num].style.background = color1;
            flag = true;
        });
    }

    left.onclick = function () {
        if (flag) {
            fn2();
        }
    }
    right.onclick = function () {
        if (flag) {
            fn1();
        }
    }
    for (let i = 0; i < dian.length; i++) {
        dian[i].onmouseover = function () {
            if (flag) {
                for (let j = 0; j < img.length; j++) {
                    img[j].style.opacity = 0;
                }
                animate(img[i], {opacity: 0});
                animate(img[i], {opacity: 1}, 500, function () {
                    dian[i].style.background = color1;
                    dian[num].style.background = color2;
                    num = i;
                })
            }
        }
    }
    box.onmouseover = function () {
        clearInterval(t);
    }
    box.onmouseout = function () {
        t = setInterval(fn1, t1);
    }
}


//2.双下标轮播
function shuangxiabiao(box, img, btns, btn, left, right, color1, color2, time) {
    var box = document.getElementsByClassName(box)[0];
    var img = document.getElementsByClassName(img);
    var dians = document.getElementsByClassName(btns)[0];
    var dian = dians.getElementsByTagName(btn);
    var left = document.getElementsByClassName(left)[0];
    var right = document.getElementsByClassName(right)[0];
    dian[0].style.background = color1;
    var widths = box.offsetWidth;
    var t = setInterval(fn1, time);
    var now = 0, next = 0;
    var flag = true;

    function fn1() {
        flag = false;
        next++;
        if (next == img.length) {
            next = 0;
        }
        img[next].style.left = widths + 'px';
        img[now].style.left = 0;
        animate(img[now], {left: -widths}, 500);
        animate(img[next], {left: 0}, 500, function () {
            for (let i = 0; i < dian.length; i++) {
                dian[i].style.background = color2;
            }
            dian[next].style.background = color1;
            flag = true;
        });
        now = next;
    }

    function fn2() {
        flag = false;
        next--;
        if (next == -1) {
            next = img.length - 1;
        }
        img[next].style.left = -widths + 'px';
        img[now].style.left = 0;
        animate(img[next], {left: 0}, 500);
        animate(img[now], {left: widths}, 500, function () {
            for (let i = 0; i < dian.length; i++) {
                dian[i].style.background = color2;
            }
            dian[next].style.background = color1;
            flag = true;
        });
        now = next;
    }

    left.onclick = function () {
        if (flag) {
            fn2();
        }
    }
    right.onclick = function () {
        if (flag) {
            fn1();
        }
    }
    box.onmouseout = function () {
        t = setInterval(fn1, time);
    }
    box.onmouseover = function () {
        clearInterval(t);
    }
    for (let i = 0; i < dian.length; i++) {
        dian[i].onclick = function () {
            flag = false;
            if (i == now) {
                flag = true;
                return;
            }
            else if (i < now) {
                // now=i;
                // next=i;
                // fn2();
                img[i].style.left = -widths + 'px';
                img[now].style.left = 0;
                animate(img[now], {left: widths});
                animate(img[i], {left: 0}, function () {
                    for (let j = 0; j < dian.length; j++) {
                        dian[j].style.background = color2;
                    }
                    dian[i].style.background = color1;
                    flag = true;
                });
                now = i;
                next = i;
            }
            else if (i > now) {
                // now=i;
                // next=i;
                // fn1();
                img[i].style.left = widths + 'px';
                img[now].style.left = 0;
                animate(img[i], {left: 0});
                animate(img[now], {left: -widths}, function () {
                    for (let j = 0; j < dian.length; j++) {
                        dian[j].style.background = color2;
                    }
                    dian[i].style.background = color1;
                    flag = true;
                });
                now = i;
                next = i;
            }
        }

    }
}
//选项卡
function xuanxiangka1(btn, btns, color1, color2) {
    let btn = document.getElementsByClassName(btn);
    let btns = document.getElementsByClassName(btns);
    for (let i = 0; i < btn.length; i++) {
        btn[i].onmouseover = function () {
            btns[i].style.display = 'block';
            btn[i].style.background = color1;
        }
        btn[i].onmouseout = function () {
            btns[i].style.display = 'none';
            btn[i].style.background = color2;
        }
    }
}

function xuanxiangka2(btn, btns, color1, color2) {
    let btn = document.getElementsByClassName(btn);
    let btns = document.getElementsByClassName(btns);
    for (let i = 0; i < btn.length; i++) {
        btn[i].onmouseover = function () {
            for (let j = 0; j < btns.length; j++) {
                btns[j].style.display = 'none';
                btns[j].style.background = color2;
            }
            btns[i].style.display = 'block';
            btns[i].style.background = color1;
        }
    }
}

//楼层跳转
function louceng(kuang, louceng1, lefts1, left1, fixed1, bannerxia1, fanhui1, se1, [a, b, c, d, e, f, g, h, i, j],caini1,cainiqu1) {
    let loucengs = document.querySelector(kuang);
    let louceng = document.querySelectorAll(louceng1);
    let left = document.querySelectorAll(left1);
    let height = parseInt(document.documentElement.clientHeight / 3);
    let color = [a, b, c, d, e, f, g, h, i, j];
    let current;
    let fixed = document.querySelector(fixed1);
    let down = true;
    let up = false;
    let bannerxia = document.querySelector(bannerxia1);
    let da = true;
    let xiao = false;
    let lefts = document.querySelector(lefts1);
    let fanhui = document.querySelector(fanhui1);
    let caini=document.querySelector(caini1);
    let cainiqu=document.querySelector(cainiqu1);
    window.onscroll = function () {
        let stop = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
        louceng.forEach(function (val, index) {
            if (stop >= val.offsetTop - height - 10) {
                current = index;
                left.forEach(function (vals) {
                    color.forEach(function () {
                        vals.style.background = se1;
                    })
                    left[index].style.background = color[index];
                })
            }
        })
        if (bannerxia.offsetTop <= stop) {
            if (down) {
                down = false;
                animate(fixed, {top: 0}, function () {
                    up = true;
                })
            }
            if (da) {
                da = false;
                animate(lefts, {width: 40, height: 400}, function () {
                    xiao = true;
                })
                animate(fanhui,{width:24,height:24,padding:6});
                animate(caini,{width:24,height:24,padding:6});
            }
        }
        else if (stop < bannerxia.offsetTop) {
            if (up) {
                up = false;
                animate(fixed, {top: -50}, function () {
                    down = true;
                })
            }
            if (xiao) {
                xiao = false;
                animate(lefts, {width: 0, height: 0}, function () {
                    da = true;
                })
                animate(fanhui,{width:0,height:0,padding:0});
                animate(caini,{width:0,height:0,padding:0});
            }
        }

    if(document.documentElement.scrollTop>=6600){
        caini.style.background='#ff0036';
    }
    else{
        caini.style.background='#555';
    }
    }
    left.forEach(function (val, index) {
        val.onclick = function () {
            current = index;
            animate(document.documentElement, {scrollTop: louceng[index].offsetTop - height});
        }
        val.onmouseover = function () {
            val.style.background = color[index];
        }
        val.onmouseout = function () {
            if (current != index) {
                val.style.background = se1;
            }
        }
    })
    fanhui.onclick = function () {
        animate(document.documentElement, {scrollTop: 0});
    }
    caini.onclick=function(){
        animate(document.documentElement,{scrollTop:cainiqu.offsetTop});
    }
    caini.onmouseover=function(){
        caini.style.background='#000';
    }
    caini.onmouseout=function(){
        if(document.documentElement.scrollTop<=6600){
            caini.style.background='#555';
        }
        else{
            caini.style.background='#ff0036';
        }
    }
}