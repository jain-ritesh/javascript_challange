let hours = document.getElementById('hours');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

let DisplyaTime = () =>{
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();


    let hRotation = 30 *hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss; 
    
    hours.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}
setInterval(DisplyaTime, 1000);