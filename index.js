document.addEventListener('DOMContentLoaded', function(){
    var one = document.getElementById('one');
    var buttonOne = document.createElement("button");
    buttonOne.innerHTML = "Alert!";
    buttonOne.addEventListener('click', function(){
        alert("Hello!");
    });
    one.appendChild(buttonOne);
});

// TWO
var buttonTwo2 = document.getElementById('buttonTwo');
buttonTwo2.addEventListener('click', function(){
    var inputValue = document.getElementById('myInput').value;
    alert(inputValue);
});

// THREE

var div3 = document.getElementById('three');
div3.addEventListener('mouseenter', function(){
    div3.style.backgroundColor = randomColor();
});
div3.addEventListener('mouseleave', function(){
    div3.style.backgroundColor = 'green';
});

// FOUR
var div4 = document.getElementById('four');
div4.addEventListener('mouseover', function(){
    div4.style.color = randomColor();
});

// FIVE
var div5 = document.getElementById('five');
var button5 = document.getElementById('buttonFive');
button5.addEventListener('click', function(){
    var myName = document.createElement('p');
    myName.innerText = 'Kristine'
    div5.appendChild(myName);
});

// SIX
var list = document.getElementById('newList');
var button6 = document.getElementById('buttonSix');
var myFriends = [
    "Shaggy",
    "Scooby",
    "Velma",
    "Louise",
    "Tina",
    "Bob",
    "Fred",
    "Amanda",
    "Morty",
    "Rick"
]
button6.addEventListener('click', function(){
    myFriends.forEach(function(friend){
       var listOff = document.createElement('li');
       listOff.innerText = friend;
       list.appendChild(listOff);
    })
});

// SEVEN
var sentence = 'hello this is my sentence that obliterates all my friends';
var button7 = document.getElementById('buttonSeven');
button7.addEventListener('click', function(){
    var split = sentence.split(" ");
    console.log(list.childNodes);
    console.log(split);
   for(i = 0; i < split.length; i++){
       list.children[i].innerText = split[i];
   }

})

function randomColor(){
    var allowed = "0369cf".split( '' ), s = "#";
    while ( s.length < 4 ) {
       s += allowed.splice( Math.floor( ( Math.random() * allowed.length ) ), 1 );
    }
    return s;
}