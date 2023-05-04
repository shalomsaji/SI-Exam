
  const options=document.querySelector(".options").children;
  const answerTrackerContainer=document.querySelector(".answers-tracker");
  const questionNumberSpan=document.querySelector(".question-num-value");
  const totalQuestionSpan=document.querySelector(".total-question");
  const correctAnswerSpan=document.querySelector(".correct-answers");
  const totalQuestionSpan2=document.querySelector(".total-question2");
  const percentage=document.querySelector(".percentage");
  const question=document.querySelector(".question");
  const op1=document.querySelector(".option1");
  const op2=document.querySelector(".option2");
  const op3=document.querySelector(".option3");
  const op4=document.querySelector(".option4");
  let questionIndex;
  let index=0;
  let myArray=[];
  let myArr=[];
  let score=0;

 
  
   
 
  


 
  // questions and options and answers
  
   const questions=[
   {
    q:'ഒരു ഏകീകൃത നാണയവ്യവസ്ഥ നടപ്പിലാക്കിയ സല്‍ത്തനത്ത് ഭരണാധികാരി ആരാണ്? (Name the sultanate ruler  who introduced the Uniform Monetary System.)',
    options:['കുത്ബുദ്ദീന്‍ ഐബക്ക് (Qutbuddin Aybak)','ബാല്‍ബന്‍ (Balban)','ഇബ്രാഹിം ലോദി (Ibrahim Lodi)','ഇല്‍തുത്മിഷ്‌ (Iltutmish)'],
    answer:4
   },
   {
    q:'തുടര്‍ച്ചയായ 5 എണ്ണല്‍സംഖ്യകളുടെ തുക 120 ആയാല്‍ മധ്യത്തിലെ സംഖ്യയേത്? (The sum of 5 consecutive natural numbers is 120. Find the middle number?)',
    options:['22','24','26','28'],
    answer:2
   },
   {
    q:'Why did Raja run away?',
    options:['To escape from his grandfather’s beat','On seeing a snake','In afraid of ghosts','Because he was hungry'],
    answer:1
   },
   {
    q:'How many members were in Raja’s family?',
    options:['Twelve','Three','Four','Five'],
    answer:3
   },
   {
    q:'കോശദ്രവ്യത്തില്‍ കാണപ്പെടുന്ന സവിശേഷഘടകങ്ങള്‍ ആണ് _______. (The parts embedded in the cytoplasm, that perform specific functions within the cell.)',
    options:['ജീവദ്രവ്യം (Protoplasm)','കോശസ്തരം (Cell membrane)','കോശാംഗങ്ങള്‍ (Cell organelles)','ഫേനം (Vacuole)'],
    answer:3
   },
   {
    q:'കോശം ആദ്യമായി കണ്ടെത്തിയത് ആര്? (The cell was first discovered by ----)',
    options:['റോബര്‍ട്ട് ഹുക്ക് (Robert Hooke)','റോബര്‍ട്ട് ബ്രൗണ് ‍(Robert Brown)','M.J ഷ്‌ളീഡന്‍ (M.J Schleiden)','മെല്‍വിന്‍  കാല്‍വിന്‍ (Melvin Calvin)'],
    answer:1
   },
   {
    q:'താഴെ തന്നിരിക്കുന്നവയില്‍ \'പാല്‍\' എന്ന് അര്‍ഥം വരുന്ന  പദമേത്?',
    options:['ദുഗ്ധം','ദുര','ദ്രുമം','ധര'],
    answer:1
   },
   {
    q:'മലയാളത്തിലെ പ്രമുഖ കവിയായ കടമ്മനിട്ട രാമകൃഷ്ണന്റെ കൃതികളില്‍ പെടാത്തതേത്?',
    options:['പുരുഷസൂക്തം','കുറത്തി','കോഴി','രമണന്‍'],
    answer:4
   },
   {
    q:'ഒരു വൃത്തത്തെ തുല്യഭാഗങ്ങളാക്കി ഒരു ഷഡ്ഭുജം വരയ്ക്കാന്‍ കേന്ദ്രത്തില്‍ എടുക്കേണ്ട കോണളവെത്ര ഡിഗ്രിയാണ്? (By dividing a circle into equal parts for constructing a hexagon, how much measure of angle can be taken at the centre of the circle?',
    options:['60°','120°','30°','50°'],
    answer:1
   },
   {
    q:'ബാഹ്‌മിനി രാജ്യത്തിന്റെ സ്ഥാപകന്‍ (The founder of the Bahmani Kingdom)',
    options:['ഹരിഹരന്‍ (Harihara)','ബുക്കന്‍ (Bukka)','അലാവുദ്ദീന്‍ ഹസ്സന്‍ ബാഹ്‌മന്‍ഷാ (Alauddin Hasan Bahman Shah)','ബാബര്‍ (Babur)'],
    answer:3
   }
  ]


  // set questions and options and question number
  totalQuestionSpan.innerHTML=questions.length;
  function load(){
        questionNumberSpan.innerHTML=index+1;
         question.innerHTML=questions[questionIndex].q;     
         op1.innerHTML=questions[questionIndex].options[0];
         op2.innerHTML=questions[questionIndex].options[1];
         op3.innerHTML=questions[questionIndex].options[2];
         op4.innerHTML=questions[questionIndex].options[3];
         index++;
  }
  
  function check(element){
   if(element.id==questions[questionIndex].answer){
    element.classList.add("correct");
    updateAnswerTracker("correct")
    score++;
    console.log("score:"+score)
   }
   else{
    element.classList.add("wrong");
    updateAnswerTracker("wrong")

   }
   disabledOptions()
  }
   
  function disabledOptions(){
     for(let i=0; i<options.length; i++) {
      options[i].classList.add("disabled");
      if(options[i].id==questions[questionIndex].answer){
       options[i].classList.add("correct");
      }

     }
  }
  
  function enableOptions(){
     for(let i=0; i<options.length; i++) {
      options[i].classList.remove("disabled","correct","wrong");
     }
  }

  function validate(){
      if(!options[0].classList.contains("disabled")){
        alert("Please Selecto one option")
      }
      else{
       enableOptions();
       randomQuestion();
      }
  }

  function next(){
    validate();
  }
   
  function randomQuestion(){
   let randomNumber=Math.floor(Math.random()*questions.length);
   let hitDuplicate=0;
       if(index==questions.length){
        quizOver();
       }
       else{
         if(myArray.length>0){
             for(let i=0; i<myArray.length; i++){
               if(myArray[i]==randomNumber){
                  hitDuplicate=1;
                  break;
               }
             }
             if(hitDuplicate==1){
              randomQuestion();
             }
             else{
               questionIndex=randomNumber;   
              load();
              myArr.push(questionIndex);
             }
         }
         if(myArray.length==0){
           questionIndex=randomNumber;   
           load();
           myArr.push(questionIndex);
         }

       myArray.push(randomNumber);
       
      }
  }
      
  function answerTrakcer(){
     for(let i=0; i<questions.length; i++){
      const div=document.createElement("div")
         answerTrackerContainer.appendChild(div);
     }
  }

 function updateAnswerTracker(classNam){
   answerTrackerContainer.children[index-1].classList.add(classNam);
 }

 function quizOver(){
    document.querySelector(".quiz-over").classList.add("show");
    correctAnswerSpan.innerHTML=score;
    totalQuestionSpan2.innerHTML=questions.length;
    percentage.innerHTML=(score/questions.length)*100 + "%";
 }
 
 function tryAgain(){
     window.location.href = "/";
 }

 window.onload=function(){
  randomQuestion();
  answerTrakcer();
 
}



