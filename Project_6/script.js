let body = document.querySelector('body');
let boxs = document.querySelectorAll('.box')

boxs.forEach(function(box){
    // console.log(box)
    box.addEventListener('click', function(e){
        console.log(e.target)
        if(e.target.id == 'box1'){
            document.body.style.background='yellow';
        } else if(e.target.id == 'box2'){
            document.body.style.background='blueviolet'
        }else if(e.target.id == 'box3'){
            document.body.style.background='tomato'
        }else if(e.target.id == 'box4'){
            document.body.style.background='pink'
        }else if(e.target.id == 'box5'){
            document.body.style.background='yellowgreen'
        }
    })
})