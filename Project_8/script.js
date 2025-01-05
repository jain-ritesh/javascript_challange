const quetion = [
    {
        'que':'Javascript is an _______ language?',
        'a':'Object-Oriented',
        'b':'Object-Based',
        'c':'Assembly-language',
        'd':'High-level', 
        'correct':'b'
    },
    {
        'que':'Which one of the following also known as Conditional Expression:',
        'a':'Alternative to if-else',
        'b':'Switch statement',
        'c':'If-then-else statement',
        'd':'immediate if',
        'correct':'d'
    },
    {
        'que':'In JavaScript, what is a block of statement?',
        'a':'Conditional block',
        'b':'block that combines a number of statements into a single compound statement',
        'c':'both conditional block and a single statement',
        'd':'block that contains a single statement',
        'correct':'b'
    },
    {
        'que':'Current PM Of India',
        'a':'Narendra Modi',
        'b':'anil Modi',
        'c':'Jamsetji Nusserwanji Tata',
        'd':'Rahul Gandhi',
        'correct':'a'  
    },
    {
      'que':'The "function" and " var" are known as:',
      'a':'Keywords',
      'b':'Data types',
      'c':'Declaration statements',
      'd':'Prototypes',
      'correct':'c'  
  },
  {
    'que':'Which of the following variables takes precedence over the others if the names are the same?',
    'a':'Global variable',
    'b':'The local element',
    'c':'The two of the above',
    'd':'None of the above',
    'correct':'b'  
},
{
  'que':'Which one of the following is the correct way for calling the JavaScript code?',
  'a':'Preprocessor',
  'b':'Triggering Event',
  'c':'RMI',
  'd':'Function/Method',
  'correct':'d'  
},
{
  'que':'Which of the following type of a variable is volatile?',
  'a':'Mutable variable',
  'b':'Dynamic variable',
  'c':'Volatile variable',
  'd':'Immutable variable',
  'correct':'a'  
},
{
  'que':'Which of the following option is used as hexadecimal literal beginning?',
  'a':'00',
  'b':'0x',
  'c':'0X',
  'd':'Both 0x and 0X',
  'correct':'d'  
},
{
  'que':'Which of the following number object function returns the value of the number?',
  'a':'toString()',
  'b':'valueOf()',
  'c':'toLocaleString()',
  'd':'toPrecision()',
  'correct':'b'  
},

];

let index = 0;
let total = quetion.length;
let right = 0,
    wrong = 0;
const optionInput = document.querySelectorAll('.option')
const loadQuetion = () =>{
  if(index == total){
    return endQuiz()
  }
  reset();
  const data = quetion[index];
  queBox.innerText = `${index+1}) ${data.que}`;
  optionInput[0].nextElementSibling.innerText = data.a;
  optionInput[1].nextElementSibling.innerText = data.b;
  optionInput[2].nextElementSibling.innerText = data.c;
  optionInput[3].nextElementSibling.innerText = data.d;
  // console.log(data)
};

const submitQuiz = ()=>{
  const data = quetion[index]
    const ans = getAnswer()
    if (ans == data.correct){
        right++;
    }
    else{
      wrong++;
    }
    index++;
    loadQuetion();
    return;
}

const getAnswer = () =>{
  let answer;
  optionInput.forEach(
    (input)=>{
       if(input.checked){
       answer = input.value;

       }
    }
  )
  return answer;
}

const reset = () =>{
  optionInput.forEach(
    (input) => {
      input.checked = false;
    }
  )
}
const endQuiz = () =>{
  document.getElementById('box').innerHTML = `
  <h3> Thank You! for Plaing the Quiz</h3>
  <h2> ${right} / ${total} are Correct </h2>`
}
// getAnswer()
loadQuetion()