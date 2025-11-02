
// TO get random joke

// var oneLinerJoke = require('one-liner-joke');

// var getRandomJoke = oneLinerJoke.getRandomJoke();
// console.log(getRandomJoke)

//to create text in console

const figlet = require('figlet')

figlet("--*", function(err, data){
    if(err){
        console.log(err);
      
    }
    else{
        console.log(data);
        
    }
}
)