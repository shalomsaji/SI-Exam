
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
    q:'നഗരജീവിതത്തിന്റെ ആദിമരൂപം നിലനിന്നിരുന്ന താമ്രശിലായുഗകേന്ദ്രം.  (In which Chalcolithic site the ancient forms of urban settlement existed?)',
    options:['മെഹര്‍ഗഡ് (Mehrgarh)','ആദംഗഡ് (Adamgarh)','ചാതല്‍ ഹൊയുക്ക് (Catalhoyuk)','ബാഗൊര്‍ (Bagor)'],
    answer:3
   },
   {
    q:'ഒരു സമപാര്‍ശ്വത്രികോണത്തിന്റെ ഒരു കോണ്‍ 100° ആയാല്‍ മറ്റുകോണുകള്‍ എത്രവീതം? (One angle of an isosceles triangle is 100°, what are the other two angles?)',
    options:['40° , 40°','30° , 50°','100° , 80°','10° , 30°'],
    answer:1
   },
   {
    q:'വേട്ടയാടല്‍ യുഗം\' എന്ന് വിശേഷിപ്പിക്കുന്നത് ഏതു കാലഘട്ടത്തെയാണ്?  (Which age is known as \‘the age of hunters\’?)',
    options:['മധ്യശിലായുഗം  (Mesolithic Age)','പ്രാചീനശിലായുഗം   (Palaeolithic Age)','നവീനശിലായുഗം (Neolithic Age)','താമ്രശിലായുഗം (Chalcolithic Age)'],
    answer:2
   },
   {
    q:'ഹരപ്പന്‍ സംസ്‌കാരകാലത്ത് കടല്‍വഴി വാണിജ്യം നടത്തിയ കേന്ദ്രം.  (Name the centre of maritime trade in Harappan Civilization.)',
    options:['റംഗ്പുര്‍ (Rangpur)','ലോഥാല്‍ (Lothal)','ഹരപ്പ (Harappa)','കാലിബംഗന്‍ (Kalibangan)'],
    answer:2
   },
   {
    q:'What did the boy find lying in the middle of the room?',
    options:['A big cat','A priest','A gobblin rat','A broken statue'],
    answer:3
   },
   {
    q:'താഴെ പറയുന്നവയില്‍ ഏതാണ് പ്രകാശ തീവ്രതയുടെ യൂണിറ്റ്?  (Which among the following is the unit of luminous intensity?)',
    options:['ആമ്പിയര്‍ (Ampere)','കാന്‍ഡില (Candela)','പ്രകാശവര്‍ഷം (Light year)','ജൂള്‍ (Joule)'],
    answer:2
   },
   {
    q:'ഖരപദാര്‍ഥങ്ങള്‍ ചൂടാക്കിയാല്‍ ദ്രാവകമാകാതെ നേരിട്ട് വാതകമാകുന്ന പ്രക്രിയ.  (The process in which a solid substance changes to vapour without forming liquid on heating.)',
    options:['ഉത്പതനം (Sublimation)','ബാഷ്പീകരണം (Vapourisation)','വ്യാപനം (Diffusion)','സ്വേദനം (Distillation)'],
    answer:1
   },
   {
    q:'കോശത്തിനുള്ളില്‍ പ്രവേശിക്കുന്ന അന്യ വസ്തുക്കളെ നശിപ്പിക്കുന്ന കോശാംഗം.  (The organelle that destroys the foreign substances that enter the cell.)',
    options:['സെന്‍ട്രോസോം (Centrosome)','ലൈസോസോം (Lysosome)','റൈബോസോം (Ribosome)','ഗോള്‍ജി കോംപ്ലക്‌സ്   (Golgi complex)'],
    answer:2
   },
   {
    q:'താഴെ തന്നിരിക്കുന്നവയില്‍ \'സൂര്യന്‍\' എന്നര്‍ഥം  വരാത്ത പദമേത്?',
    options:['അരുണന്‍','മാര്‍ത്താണ്ഡന്‍','പനിമതി','ദിവാകരന്‍'],
    answer:3
   },
   {
    q:'അക്കാലം\' എന്ന പദം ശരിയായി പിരിച്ചെഴുതിയതേത്?',
    options:['അ+ക്കാലം','അ+കാലം','ആ+കാലം','ആ+ക്കാലം'],
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



