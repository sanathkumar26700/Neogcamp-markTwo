//read Input
const chalk = require('chalk');
var readlineSync = require('readline-sync');

const log = console.log;
log(chalk.black.bgCyanBright('Hello there welcome to the OFFICE quiz'));
var userName = readlineSync.question('\nLet me know your  name here : ');

var score = [0,0], k,j ;
 
log(chalk.bgBlackBright.bgBlackBright(`\nHey ${userName} , let's check if you are the biggest office fan?🤔
Come on make the office fandom proud!!❤\n`));
log(chalk.yellowBright(`Current Score:  ${score[0]}`));

//function
function play(question,answer,k)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase()===answer.toLowerCase())
  {
    log(chalk.green('Congrats! You are right..🤩\n'));
    score[k]++;
    log(chalk.yellowBright(`Current Score:  ${score[k]}
    -----------------------------------------------------`));
  }
  else
  {
    log(chalk.magenta('Sorry,Wrong answer...😢\n'));
    score[k]--;
    log(chalk.yellowBright(`Current Score:  ${score[k]}`));  }
}
//array of objects 
var questions =[
  {
    question: chalk.red(`
     1. Why did Pam call off her wedding to Roy?

        a) She wanted to save money.
        b) She was in love with Jim.
        c) Roy cheated on her.
        d) She got fired\n`),
    answer:"b"
  },
  {
    question:chalk.red(`
    What type of farm does Dwight own?

    a) Bear Farm
    b) Beet Farm
    c) Carrot Farm
    d) Beetle Farm\n`),
    answer:"b"
  },
  {
    question:chalk.red(`
   How long were Pam and Roy engaged?

    a)6 months
    b)2 years
    c)6 years
    d)3-4 years\n`),
    answer:"d"
  },
  {
    question:chalk.red(`
    What name did Pam and Angela fight over for their babies?

    a)Andrew
    b) James
    c) Philip
    d) William\n`),
    answer:"c"
  },
  {
    question:chalk.red(`
    Where does Jim tell Pam about his feelings? 

    a)The office parking lot
    b)The warehouse
    c)The office
    d)Jim's Car\n`),
    answer:"a"
  }

];

var questions2 =[
  {
    question: chalk.yellow(`
    Where do Jim and Pam share their first REAL kiss?    
    
    a)The roof
    b)The warehouse
    c)Jim's desk
    d)The park\n`),
    answer:"c"
  },
  {
    question: chalk.yellow(`
    Which of Angela's cats does Dwight freeze? 

    a)Bandit
    b)Sprinkles
    c)Sparkles
    d)Fluffy\n`),
    answer:"c"
  },
  {
    question:chalk.yellow(`
    What tattoo is Andy forced to get?

    a)A wolf
    b)A nard dog
    c)A naked man
    d)The Cornell logo\n`),
    answer:"b"
  }
];

//data of high scores for score1
var highSCORES=
[
  {
    name:"Druthi",
    scoree:4
  },
  {
    name:"Arjun",
    scoree:2
  }
]

var highSCORES2=
[
  {
    name:"Muktha",
    scoree:2
  }
]

//loop around object
for(var i =0; i<questions.length;i++)
{
  var curr = questions[i];
  play(curr.question, curr.answer,k = 0);
}

console.log('Here we finish the quiz!!');
if(score[0]>=4)
{
log(chalk.greenBright(`Damn you are true fan! You scored : ${score[0]}`));
console.log('You deserve to be the new assistant to the mangaer of Dunder mifflin,Scranton.')
for(var i=0;i<highSCORES.length;i++)
{
  var curr = highSCORES[i];
  if(curr.scoree<score[0]){
       console.log('\nCongrats! You are the highest scorer in first round' );
      }
    }
    console.log('\nNow to check if you are a diehard fan we have bonus round!!');
    var ans = readlineSync.question('Type yes/no : ');
    if(ans.toLowerCase()==="yes")
    {
      for(var i =0; i<questions2.length;i++)
      {
      var curr2 = questions2[i];
      play(curr2.question, curr2.answer,k = 1);
      }
      log(chalk.blueBright("Now you are the biggest Office fan"));
      console.log("You scored:"+ score[1]);

      for(var i=0;i<highSCORES2.length;i++)
      {
      var curr2 = highSCORES2[i];
      if(curr2.scoree<score[1])
        {
        console.log('Congrats! You have beaten '+ curr2.name + " " + "in bonus round" );
        console.log('Please send your winning screenshot!')
        }
      }
      console.log("Now you are promoted to be the manager!!😎");
    }
      else
      {
        log(chalk.green('Oops , we will wait for you!'));
      }
    }

  else
  {
    log(chalk.yellow('no worry! Your score is:'+ score[0]));
    log(chalk.redBright.bgWhite('You can re-watch the Office and come back anytime 😉'));
  }