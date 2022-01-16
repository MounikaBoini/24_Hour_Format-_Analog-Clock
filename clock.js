setInterval(() => {
    let d= new Date();
    let hh=d.getHours()*15;
    let mm=d.getMinutes()*6;
    let ss=d.getSeconds()*6;
    document.getElementById("hour").style.transform = `rotateZ(${hh+(mm/24)}deg)`;
    document.getElementById("minute").style.transform= `rotateZ(${mm}deg)`;
    document.getElementById("second").style.transform = `rotateZ(${ss}deg)`;
}, 1000);
