window.onload=function(){
	let shangpin=document.getElementsByClassName('shangpin');
    var chanpin=document.getElementsByClassName('chanpin');
    var shuang11=document.getElementsByClassName('shuang11');
    var fenzhong=document.getElementsByClassName('fenzhong');
    shangpin[0].onmouseover=function(){
        chanpin[0].style.display='block';
        fenzhong[0].style.display='none';
    }
    shuang11[0].onmousemove=function(){
        fenzhong[0].style.display='block';
        chanpin[0].style.display='none';
    }
    var mingchen=document.getElementsByClassName('mingchen');
    var xuanxiangka=document.getElementsByClassName('xuanxiangka');
    for(let i=0;i<mingchen.length;i++){
    	mingchen[i].onmouseover=function(){
    		xuanxiangka[i].style.display='block';
    	}
        mingchen[i].onmouseout=function(){
            xuanxiangka[i].style.display='none';
        }
    }
   
    // for(let i=0;i<)
    var aaa=document.getElementsByClassName('aaa1');
    var iconfont=document.getElementsByClassName('i');
    function  bianse(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
    	var arr=[a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p];
    	for(let i=0;i<mingchen.length;i++){
    		aaa[i].onmouseover=function(){
    			aaa[i].style.color=arr[i];
    			iconfont[i].style.color=arr[i];
    		}
    		aaa[i].onmouseout=function(){
    			iconfont[i].style.color='#fff';
    			aaa[i].style.color='#fff';
    		}
            xuanxiangka[i].onmouseover=function(){
                aaa[i].style.color=arr[i];
                iconfont[i].style.color=arr[i];
            }
            xuanxiangka[i].onmouseout=function(){
                iconfont[i].style.color='#fff';
                aaa[i].style.color='#fff';
            }
    	}
    }
    bianse('#e54077','#427def','#6347ed','#e54077','#6347ed','#427def','#fa5c5c','#f7a831','#f7a831','#427def','#dd2727','#427def','#f7a831','#3bc7b0','#dd2727','#3bc7b0');    
    var banner=document.getElementsByClassName('banner')[0];
    var img=document.getElementsByClassName('bannerimg');
    var dianqu=document.getElementsByClassName('dianqu')[0];
    var dian=dianqu.getElementsByTagName('li');
    img[0].style.opacity=1;
    dian[0].style.background='#fff';
    console.log(dian);
    var t=setInterval(fn1,3000);
    var num=0;
    function fn1(){
        num++;
        if(num==img.length){
            num=0;
        }
        for(let i=0;i<img.length;i++){
            img[i].style.opacity=0;
            dian[i].style.background='#000';
            dian[i].style.opacity=0.5;
            img[i].style.zIndex=1;
        }
        img[num].style.zIndex=5;
        img[num].style.opacity=1;
        dian[num].style.background='#fff';
        dian[num].style.opacity=0.5;
    }
    banner.onmouseover=function(){
        clearInterval(t);
    }
    banner.onmouseout=function(){
        t=setInterval(fn1,3000);
    }
    for(let i=0;i<dian.length;i++){
        dian[i].onmouseover=function(){
            img[i].style.zIndex=5;
            img[i].style.opacity=1;
            img[num].style.opacity=0;
            img[num].style.zIndex=1;
            dian[num].style.background='#000';
            dian[i].style.background='#fff';
            dian[i].style.opacity=1;
            num=i;
        }
    }
}