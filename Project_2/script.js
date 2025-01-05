//  console.log('Its Working')

// // let arr = [5,8,6,7,8,9,6,5,70]
// // // let [a,b, , , ...rest]= arr
// // // console.log(a,b,rest)

// // const {a,b} = {a:1, b:82}
// // console.log(a,b) 

// // let arr_1 = [80,52,62]
// // let obj = {...arr_1}
// // console.log(obj)

// // let sum = (v1,v2,v3)=>{
// //      return v1+v2+v3;
// // }
// // console.log(sum(...arr_1))

// // hosting in javascript
// // greet()
// //  function greet(){
// //     console.log('Good Mornning')
// //  }
// //  console.log(a)
// //  const a = 45;

// // passworld generator
// class password{

//    constructor(){
//       console.log('Wellcome to Password genarator')

//       this.pass =" "
//    }
//    generatePass(len){
//       let user = document.getElementById('input').value;
//       // let len = user;
//       let click = document.getElementById('show').addEventListener('click',()=>{

      
//          let char = "abcdefghijklmnopqrstuvwxyz"
//          let no = "0123456789"
//          let spetial= "@#$%^&*()!"
//          if(show.add)
//        if(len > user){
//            let i = 0;
//            while(i< len){
//             this.pass += char[Math.floor(Math.random() * char.length)]
//             this.pass+= no[Math.floor(Math.random() * no.length)]
//             this.pass += spetial[Math.floor(Math.random() * spetial.length)]
//          i += user
//          }
//       }
//       else{
//           console.log('sorry Your Password is not 3 characters ')

//        }
//        this.pass = this.pass.substr(0, len)
//        return this.pass
//       }
//    )}
//    }
// let p = new password()
// console.log(p.generatePass(user.length))



// Main Code Start Here

const getColor = ()=>{
   const num =  Math.floor(Math.random() * 16777215)
   const randomCode = '#'+ num.toString(16)
   // console.log(num, randomCode)
   document.querySelector('.main').style.background = randomCode;
   
   color.innerText = randomCode;
   navigator.clipboard.writeText(randomCode)
   
}
document.getElementById('btn').addEventListener('click',()=>{
   getColor()
}) 
getColor()