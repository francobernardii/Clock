function showTime(){
    let date = new Date();
    let d = date.getDate(); // 1-30/31
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59

    d = (d < 10) ? "0" + d : d;
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    if(s === "00"){
        document.getElementsByClassName("half1")[2].setAttribute('style','animation: flipClock 1s infinite;transform: rotateX(180deg);transform-origin: 100% 100%;')
        document.getElementsByClassName("HalfM")[0].setAttribute('style','animation: displayNone 1s infinite;')
    }else{
        document.getElementsByClassName("half1")[2].removeAttribute('style')
        document.getElementsByClassName("HalfM")[0].removeAttribute('style')
    }

    if(m === "00"){
        document.getElementsByClassName("half1")[1].setAttribute('style','animation: flipClock 1s infinite;transform: rotateX(180deg);transform-origin: 100% 100%;')
    }else{
        document.getElementsByClassName("half1")[1].removeAttribute('style')
    }

    if(h === "00"){
        document.getElementsByClassName("half1")[1].setAttribute('style','animation: flipClock 1s infinite;transform: rotateX(180deg);transform-origin: 100% 100%;')
    }else{
        document.getElementsByClassName("half1")[1].removeAttribute('style')
    }

    document.getElementsByClassName("HalfD")[0].innerText = d;
    document.getElementsByClassName("HalfD")[1].innerText = d;
    document.getElementsByClassName("HalfH")[0].innerText = h;
    document.getElementsByClassName("HalfH")[1].innerText = h;
    document.getElementsByClassName("HalfM")[0].innerText = m;
    document.getElementsByClassName("HalfM")[1].innerText = m;
    document.getElementsByClassName("HalfS")[0].innerText = s;
    document.getElementsByClassName("HalfS")[1].innerText = s;
    
    setTimeout(showTime, 1000);
    
}

window.addEventListener('load', (event) =>{
    showTime()
});
