
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
    q:'\ഒരു രണ്ടക്കസംഖ്യയെ മറ്റൊരു രണ്ടക്ക സംഖ്യകൊണ്ട് ഹരിച്ചപ്പോള്‍ 0.15 കിട്ടി. ഇവയില്‍ വലിയ സംഖ്യ ഏത്?  (A two digit number divided by another two digit number gives 0.15. Which is the bigger number of them?)',
    options:['40','80','90','70'],
    answer:2
   },
   {
    q:'Who asked Tarun whether he had joined any training school?',
    options:['Tarun\'s teacher','Tarun\'s mother','Tarun\'s friend','Ram Narayan'],
    answer:4
   },
   {
    q:'പ്രകാശസംശ്ലേഷണത്തിന്റെ ഉപോല്പ്പന്നം ഏത്?  (Which is the byproduct of photosynthesis?)',
    options:['ഹൈഡ്രജന്‍ (Hydrogen)','ഓക്‌സിജന്‍ (Oxygen)','കാര്‍ബണ്‍ ഡൈഓക്‌സൈഡ് (Carbondioxide)','നൈട്രജന്‍ (Nitrogen)'],
    answer:2
   },
   {
    q:'ഫോസിലുകളുടെ കാലപ്പഴക്കം കണ്ടെത്താന്‍ ഉപയോഗിക്കുന്ന ഐസോടോപ്പ് ഏത്? (Which isotope is used to determine the age of fossils?)',
    options:['കാര്‍ബണ്‍-14  (Carbon-14) ','കാര്‍ബണ്‍-12  (Carbon-12)','കാര്‍ബണ്‍-13 (Carbon-13) ','കാര്‍ബണ്‍-15 (Carbon-15)'],
    answer:1
   },
   {
    q:'പാലിലെ ജലത്തിന്റെ തോത് അളക്കാന്‍ ഉപയോഗിക്കുന്ന ഉപകരണം.  (Which device is used to measure the relative density of a liquid?)',
    options:['ഹൈഡ്രോമീറ്റര്‍ (Hydrometer)','ലാക്ടോമീറ്റര്‍ (Lactometer) ','ബാരോമീറ്റര്‍ (Barometer)','തെര്‍മോമീറ്റര്‍ (Thermometer)'],
    answer:2
   },
   {
    q:'മലയാളത്തിന്റെ ഓര്‍ഫ്യൂസ്\' എന്നറിയപ്പെടുന്നതാര്?',
    options:['പി.കുഞ്ഞിരാമന്‍നായര്‍','വള്ളത്തോള്‍ നാരായണമേനോന്‍','ചങ്ങമ്പുഴ കൃഷ്ണപിള്ള','ജി.കുമാരപിള്ള'],
    answer:3
   },
   {
    q:'താഴെ തന്നിരിക്കുന്നവയില്‍ \'തേന്മാവ്\' എന്നതിനു പകരം എഴുതാവുന്ന പദമേത്?',
    options:['മരന്ദം','മാകന്ദം','മധു','മയൂരം'],
    answer:2
   },
   {
    q:'പാശ്ചാത്യ രാജ്യങ്ങളിലെ രേഖകളില്‍ \'മന്‍സമൗസ\' എന്നറിയപ്പെടുന്ന ഭരണാധികാരി?  (Who was known in European records as Mansa Musa?)',
    options:['ഷാലമീന്‍ (Charlemagne)','കങ്കന്‍ മൂസ (Kankan Musa)','ചെങ്കിസ്ഖാന്‍ (Genghis Khan)','ജസ്റ്റീനിയന്‍ (Justinian)'],
    answer:2
   },
   {
    q:'മധ്യകാല ജപ്പാനിലെ ഷോഗണുകളുടെ കാലത്തെ ഭരണകേന്ദ്രം ഏതാണ്? (Which was the centre of power in Medieval Japan under the Shoguns?)',
    options:['വെനീസ് (Venice)','ഗ്രാനഡ (Granada)','ടോക്കിയോ (Tokyo)','റോം (Rome)'],
    answer:3
   },
   {
    q:'അന്തരീക്ഷം നീരാവി പൂരിതമാകുന്ന അവസ്ഥ.  (The state at which the atmosphere is fully saturated with water.)',
    options:['തുഷാരാങ്കം  (Dew point)','പൂരിതാവസ്ഥ (Saturation level)','ആര്‍ദ്രത  (Humidity)','ആപേക്ഷിക ആര്‍ദ്രത  (Relative Humidity)'],
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



