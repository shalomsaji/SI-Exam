
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
    q:'\"കവികൾക്ക് ലോകമെമ്പാടും ഒരു ഭാഷയേയുള്ളൂ; ഇലകൾക്കും തത്തകൾക്കും ഗൗളികൾക്കുമെന്നപോലെ.\" - ഈ വരികളുടെ രചയിതാവ്?',
    options:['ഒ. എൻ. വി. കുറുപ്പ്','കടമ്മനിട്ട രാമകൃഷ്ണൻ','സച്ചിദാനന്ദൻ','ജി. ശങ്കരക്കുറുപ്പ്'],
    answer:3
   },
   {
    q:'മഷ്തിഷ്കത്തെ പൊതിഞ്ഞു കാണപ്പെടുന്ന മൂന്നു സ്തരപാളികളുള്ള ആവരണം? (The three layered membrane that covers the brain?)',
    options:['ഷ്വാൻ കോശങ്ങൾ (Schwann Cells)','മെനിഞ്ചസ് (Meninges)','ഒലിഗോഡെൻഡ്രോസൈറ്റ് (Oligodendrocyte)','പെരികാർഡിയം (Pericardium)'],
    answer:2
   },
   {
    q:'താഴെ തന്നിരിക്കുന്നവയില്‍ തകഴി ശിവശങ്കരപ്പിള്ളയുടെ കൃതിയല്ലാത്തതേത്?',
    options:['ചെമ്മീന്‍','രണ്ടാമൂഴം','രണ്ടിടങ്ങഴി','തോട്ടിയുടെ മകന്‍'],
    answer:2
   },
   {
    q:'\"മനുഷ്യന് ചില അവകാശങ്ങളുണ്ട്. അതിനെ ഹനിക്കാന്‍ ഒരു ഗവണ്‍മെന്റിനും അവകാശമില്ല.\" ഇത് ആരുടെ വാക്കുകളാണ്? (\“Everyone has some fundamental rights. No government has the right to suspend them.\”  Whose words are these?)',
    options:['വോള്‍ട്ടയര്‍ (Voltaire)','റൂസ്സോ (Rousseau)','ജോണ്‍ ലോക്ക് (John Locke)','മൊണ്ടസ്‌ക്യൂ (Montesquieu)'],
    answer:3
   },
   {
    q:'82½° പൂര്‍വരേഖാംശത്തിലെ പ്രാദേശിക സമയം അറിയപ്പെടുന്നത്? (The local time at  82½° E is known as?)',
    options:['അന്താരാഷ്ട്ര ദിനാങ്കരേഖ (International Date Line)','ഇന്ത്യന്‍ സ്റ്റാന്‍ഡേര്‍ഡ് സമയം  (Indian Standard Time)','ഗ്രീനിച്ച് സമയം (Greenwich Time)','ഗ്രീനിച്ച് രേഖ (Greenwich Meridian)'],
    answer:2
   },
   {
    q:'ഹൃദയസ്പന്ദനം, ശ്വാസോച്ഛ്വാസം എന്നീ അനൈച്ഛിക പ്രവര്‍ത്തനങ്ങളെ നിയന്ത്രിക്കുന്ന മസ്തിഷ്‌ക ഭാഗം? (The part of the brain that regulates involuntary actions like heartbeat and breathing?)',
    options:['തലാമസ് (Thalamus)','സെറിബെല്ലം (Cerebellum)','മെഡുല്ല ഒബ്ലോംഗേറ്റ (Medulla oblongata)','ഹൈപ്പോതലാമസ് (Hypothalamus)'],
    answer:3
   },
   {
    q:'ഇലക്ട്രോനെഗറ്റിവിറ്റി ഏറ്റവും കൂടിയ മൂലകമേത്? (Which element has the highest electronegativity?)',
    options:['ഫ്‌ളൂറിന്‍ (Fluorine)','ബ്രോമിന്‍ (Bromine)','അയഡിന്‍ (Iodine)','നിയോണ്‍ (Neon)'],
    answer:1
   },
   {
    q:'നൈട്രജന്‍ ഡിസ്ചാര്‍ജ് ലാമ്പില്‍ നിന്ന് പുറത്തുവരുന്ന പ്രകാശത്തിന്റെ നിറമെന്ത്? (What is the colour of light emitted by Nitrogen discharge lamps?)',
    options:['മഞ്ഞ (Yellow)','നീല (Blue)','ചുവപ്പ് (Red)','പച്ച (Green)'],
    answer:3
   },
   {
    q:'10 വശങ്ങളുള്ള ഒരു ബഹുഭുജത്തിന്റെ കോണുകള്‍ സമാന്തരശ്രേണിയിലാണ്. ഏറ്റവും ചെറിയ കോണിന്റെ അളവും ഏറ്റവും വലിയ കോണിന്റെ അളവും തമ്മിലുള്ള വ്യത്യാസം 90° ആയാല്‍ ഏറ്റവും ചെറിയ കോണിന്റെ അളവെത്ര? (The angles of a polygon having 10 sides are in arithmetic sequence. If the difference between the largest and the smallest angles is 90°, what is the measure of the smallest angle?)',
    options:['99°','189°','288°','255°'],
    answer:1
   },
   {
    q:'Who were the combatants?',
    options:['The  myna and  the crow','The mongoose and the cobra','The cobra and the crow','The boy and the mongoose'],
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



