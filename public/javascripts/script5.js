
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
    q:'ചുവടെ കൊടുത്തിരിക്കുന്നവയില്‍ നിന്ന്  ചരിത്രാതീതകാലസ്രോതസ്സിന് ഉദാഹരണം കണ്ടെത്തി എഴുതുക. (Which one among the following is related to the source of Pre - Historic Period?)',
    options:['പുസ്തകങ്ങള്‍ (Books)','നാണയങ്ങള്‍ (Coins)','ഗുഹാചിത്രങ്ങള്‍ (Cave Paintings)','താളിയോലകള്‍ (Palm Leaves)'],
    answer:3
   },
   {
    q:'2578 ...4 എന്ന് സംഖ്യ 9 ന്റെ ഗുണിതമായാല്‍ വിട്ടുപോയ അക്കം ഏത്? (2578 ...4  is multiple of nine, find the digit in the missing place)',
    options:['1','2','3','4'],
    answer:1
   },
   {
    q:'ഒന്നാം സ്വാതന്ത്ര്യസമരം നടന്നത് AD 1857 ലാണ്. ഇത് ഏത് നൂറ്റാണ്ടാണ്? (The First war of Indian Independence was in AD1857, it was related to which Century?)',
    options:['17-ാം നൂറ്റാണ്ട്(17th Century)','19-ാം നൂറ്റാണ്ട് (19th Century)','18-ാം നൂറ്റാണ്ട് (18th Century)','20-ാം നൂറ്റാണ്ട് (20th Century)'],
    answer:2
   },
   {
    q:'സൂചികള്‍ക്കിടയില്‍ ഏറ്റവും കുറവ് കോണളവുണ്ടാക്കുന്ന സമയമേത്? (In which time representing a clock gives least measure of angle between the hands?)',
    options:['6 മണി (6 o’clock)','12 മണി (12 o’clock)','1 മണി (1 o’clock)','2 മണി (2 o’clock)'],
    answer:2
   },
   {
    q:'തന്നിരിക്കുന്നവയില്‍ ആരോഹികളില്‍ പെടുന്ന സസ്യമേത്? (Which of the following is a climber?)',
    options:['തണ്ണിമത്തന്‍ (Water melon)','മധുരക്കിഴങ്ങ് (Sweet potato)','പാവല്‍ (Bitter gourd)','വെള്ളരി (Cucumber)'],
    answer:3
   },
   {
    q:'What did the fisherman and his wife fight for?',
    options:['For food','For water','For mirror','For gold'],
    answer:3
   },
   {
    q:'രാത്രിസമയങ്ങളില്‍ സസ്യങ്ങള്‍ പുറത്ത് വിടുന്ന വാതകം. (Which of the following gases is given out by plants during night?)',
    options:['ഓക്‌സിജന്‍ (Oxygen)','നൈട്രജന്‍ (Nitrogen)','കാര്‍ബണ്‍ ഡൈഓക്‌സൈഡ്  (Carbon dioxide)','ഹൈഡ്രജന്‍ (Hydrogen)'],
    answer:3
   },
   {
    q:'What kind of island did the fisherman and his wife live?',
    options:['Island of trees','Lonely island','Island of birds','Island of animals'],
    answer:2
   },
   {
    q:'താഴെ തന്നിരിക്കുന്നവരില്‍ പ്രാചീന കവിത്രയത്തില്‍ ഉള്‍പ്പെടാത്തത് ആര്?',
    options:['കുമാരനാശാന്‍','ചെറുശ്ശേരി','കുഞ്ചന്‍നമ്പ്യാര്','എഴുത്തച്ഛന്'],
    answer:1
   },
   {
    q:'\'വൃക്ഷത്തെ സ്‌നേഹിച്ച ബാലന്‍\' എന്ന കഥയുടെ രചയിതാവ്?',
    options:['വൈക്കം മുഹമ്മദ് ബഷീര്‍','രവീന്ദ്രനാഥ ടാഗോര്‍','സി. രാധാകൃഷ്ണന്‍','തകഴി ശിവശങ്കരപ്പിള്ള'],
    answer:2
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



