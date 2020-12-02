// // console.log("Deepak Singh");
// var readlineSync = require('readline-sync');
// var userName=readlineSync.question("what's your name: ");
// console.log("welcome "+userName);

// var ans=readlineSync.question("is your age greator then 25");
// if(ans=='yes')
// {
//   console.log("right");
// }
// else
// {
//   console.log('wrong');
// }

// score=0
// var hometown=readlineSync.question("whats your hometown: ");
// if(hometown=='barabanki')
// {
//   score=score+1;
//   console.log(score);
// console.log("correct");
// }
// else{
//   console.log(score);
//   console.log("incorrect")
// }

// function add(a,b)
// {
//    sum=a+b;
//   return sum;
// }
// var add=add(3,5);
// console.log(add);

// score=0;
// function quesAns(question,answer)
// {
//     var ans=readlineSync.question(question);
//     if(answer==ans)
//     {
//       score=score+1;
//     }
//     else
//     {
//       score=score-1;
//     }
   
// }
// quesAns('your age is 25?','no');
// quesAns('is 3+6 =9','yes');
// console.log('you got '+score+" marks");

// var n=readlineSync.question('enter no of lines: ');
// for(i=1;i<=n;i++)
// {
//   var s=''
//   for(j=1;j<=i;j++)
//   {
//   s=s+'*';
//   }
// console.log(s);
// }

// var grocery=['maggi','honey','sugar','salt','rice'];
// console.log(grocery[0]);
// console.log(grocery[2]);
// console.log(grocery[4]);

// var grocery=['maggi','honey','sugar','salt','rice'];
// for(i=0;i< grocery.length;i++)
// {
//   console.log(grocery[i]);
// }

// var batman={
//   name: "batman",
//   power: "martial arts",
//   costumeColor: "black",
//   strength: 100,
//   stealth: 100,
//   intelligence: 1000,
// }
// var superman={
//   name: "superman",
//   power: "super power",
//   costumeColor: "Blue",
//   strength: 100,
//   stealth: 100,
//   intelligence: 1000,
// }
// console.log('batman power is bcz of: '+batman.power);
// console.log('superman power is bcz of: '+superman.power);

// var ques1={
//   ques='whats your age',
//   ans='23'
// }

// var ques2={
//   ques='whats your name',
//   ans='Deepak'
// }
score=0;
var readlineSync = require('readline-sync');
 const chalk = require('chalk');
 console.log(chalk.red("Welcome to the Quiz"));
 var username = readlineSync.question('Enter your Name: ');
 console.log('Welcome,' , chalk.cyanBright(username), 'Let\'s Start the Quiz!! ');
 console.log('write the correct answer')

 var questions = [
   {question: `Is my name really Deepak?`,A: 'Yes', B:'NO', C:'Maybe',answer: 'a'},
   {question: `Name of my hometown?`,A: 'Delhi', B:'Lucknow', C:'Banglore',answer: 'b'},
   {question: `Who am i seriously?`,A: 'Engineer', B:'Doctor', C:'vendor',answer: 'a'},
   {question: `What is my favourite food?`,A: 'chicken', B:'paneer', C:'daal',answer: 'A'},
   {question: `I can't live without ?`,A: 'Mobile', B:'Laptop', C:'Oxygen',answer: 'c'},

 ];

for(var i = 0;i<questions.length;i++){
  var n = i+1;
  console.log(chalk.inverse.bold(n+'. '+questions[i].question));
  console.log('[a,b,c]');
  console.log(chalk.cyanBright('A: '+questions[i].A));
  console.log(chalk.cyanBright('B: '+questions[i].B));
  console.log(chalk.cyanBright('C: '+questions[i].C));
  console.log('');
  var answer = readlineSync.question('Answer: ');

  if(answer.toLowerCase() === questions[i].answer.toLowerCase()){
    score=score+1;
    console.log(chalk.bgGreen.bold('Correct'));
    
  }else{
     score=score-1;
    console.log(chalk.bgRed('Incorrect'));
    
  }
}

  console.log(chalk.yellow(`Congratulations !\n Let's know each other on https://www.linkedin.com/in/deepak-singh-140135136/ `))
  console.log(chalk.magenta('your score is: '+score));
  if(score>=3)
  { 
console.log(chalk.red(username +' you did great on this quiz.'));
  }
  else
  {
    console.log(chalk.cyanBright(username ),chalk.red('You need to know me more :) '));
  }
