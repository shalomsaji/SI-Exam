
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
    q:'മധ്യകാലഘട്ടത്തില്‍ യൂറോപ്പിലെ പണ്ഡിതഭാഷയായി കണക്കാക്കപ്പെട്ടിരുന്നത് ഏത് ഭാഷാകൂട്ടങ്ങളെയാണ്?  (From the following find out the elite and scholarly language which is used by the European in Medieval Period?)',
    options:['ലാറ്റിന്‍ - ഗ്രീക്ക് (Latin - Greek)','ഇംഗ്ലീഷ് - ഗ്രീക്ക്  (English - Greek)','ഗ്രീക്ക് - ഫ്രഞ്ച് (Greek - French)','ഇംഗ്ലീഷ് -ഫ്രഞ്ച് (English - French)'],
    answer:1
   },
   {
    q:'ഒരു രേഖീയജോടിയിലെ കോണുകള്‍ തുല്യമായാല്‍ ഓരോ കോണും എത്ര ഡിഗ്രിവീതം? (If the angles in a linear pair are equal, find the measure of each?)',
    options:['60°','90°','45°','55°'],
    answer:2
   },
   {
    q:'ജൊഹാന്‍സ് ഗുട്ടന്‍ബര്‍ഗ് അച്ചടിയന്ത്രം കണ്ടുപിടിച്ച വര്‍ഷം. (When did Johannes Gutenberg invented the printing press?)',
    options:['1453','1439','1440','1455'],
    answer:2
   },
   {
    q:'ചുവടെ കൊടുത്തിരിക്കുന്നവയില്‍ ലിയാനാര്‍ഡോ ഡാവിഞ്ചിയുടെ പ്രസിദ്ധമായ ചിത്രം ഏതാണ്?  (Find out the famous picture of Leonardo da - Vinci from the following?)',
    options:['അന്ത്യവിധി (Last Judgment)','ഏഥന്‍സിലെ വിദ്യാലയം (The school of Athens)','മൊണാലിസ (Mona Lisa)','ഇവയൊന്നുമല്ല (None of these)'],
    answer:3
   },
   {
    q:'ഒരു ത്രികോണത്തിലെ രണ്ടു കോണുകളുടെ തുക a° ആയാല്‍ മൂന്നാമത്തെ കോണ്‍ എത്ര?  (If the sum of the two angles of a triangle is a°, what will be the measure of the third one?)',
    options:['(160 - a)°','(110 - a)°','(180 - a)°','(150 - a)°'],
    answer:3
   },
   {
    q:'Who used the path to the river frequently?',
    options:['Mountaineers','Tribals','Villagers','Travellers'],
    answer:3
   },
   {
    q:'താഴെതന്നിരിക്കുന്നവയില്‍ തെങ്ങിന്റെ സങ്കരയിനം വിളയേത്?  (Which among the following is an example for a hybrid coconut variety?)',
    options:['ലക്ഷഗംഗ (Laksha Ganga)','കൈരളി (Kairali)','അനശ്വര (Anaswara)','അരുണിമ (Arunima)'],
    answer:1
   },
   {
    q:'സസ്യവളര്‍ച്ചയ്ക്ക് അത്യന്താപേക്ഷിതമായതും അന്തരീക്ഷത്തില്‍ സുലഭവുമായ മൂലകം ഏത്?  (A nutrient element causing plant growth, which is abundant in the atmosphere?)',
    options:['നൈട്രജന്‍ (Nitrogen)','ഫോസ്ഫറസ് (Phosphorus)','പൊട്ടാസ്യം (Pottasium)','സോഡിയം (Sodium)'],
    answer:1
   },
   {
    q:'താഴെ തന്നിരിക്കുന്നവയില്‍ രാജന്‍ കാക്കനാടന്റെ യാത്രാവിവരണം ഏത്?',
    options:['ഹിമാലയസാമ്രാജ്യത്തില്‍','ഹിമവാന്റെ മുകള്‍ത്തട്ടില്‍','ഹൈമവതഭൂവില്‍','ഹിമവാന്റെ താഴ്‌വരയില്‍'],
    answer:2
   },
   {
    q:'താഴെ തന്നിരിക്കുന്നവയില്‍ ഇടശ്ശേരി ഗോവിന്ദന്‍നായരുടെ വിശേഷണം ഏത്?',
    options:['ശക്തിയുടെ കവി','നിളയുടെ കവി','കുട്ടനാടിന്റെ കഥാകാരന്‍','നിളയുടെ കഥാകാരന്‍'],
    answer:1
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



