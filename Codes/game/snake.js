window.onload=function() {

    canv=document.getElementById("gc");

    ctx=canv.getContext("2d");

    document.addEventListener("keydown",keyPush);

    setInterval(game,1000/15);

}

px=py=10;

gs=tc=20;

ax=ay=15;

xv=yv=0;

trail=[];

tail = 5;