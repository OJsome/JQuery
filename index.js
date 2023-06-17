//this line of code becomes unnecessary if we paste our jQuery link before the JavaScript link in the html file
//you're literally saying here that only when jQuery is ready should the anonymous method be carried out, and pasting
//the link before JavaScript tells it also that it should load up jQuery before JavaScript. 
//However, if the jQuery link is incorrect, then this line makes up

// $(document).ready(function(){
//     $("h1").css("color", "blue");
// });


                                //SELECTION IN jQuery

//selects everything that has that name
$("h1");

//you might wanna give your buttons different classes if they can't be separated by position. eg (".il button")
$("button");


//Get the property
var color = $("h1").css("font-size");
var h1fontSize = $("h1").css("color");

console.log(color + " " + h1fontSize);



//Set the property
// $("h1").css("color", "red");
// console.log(color + " " + h1fontSize);



                                //SEPARATION OF CONCERS

//we should have our css code style the page, html for the structure, and Js for the function.. so here
//we can target a class in css beforeand, add a style to the code, 
//and add the class here in our Js to implement the style 

$("h1").addClass("big-text-with-color-pink margin-60");

//we can also remove classes - $("h1").removeClass("big-text-with-color-pink");

//we can add multiple classes:
// $("h1").addClass("big-text-with-color-pink margin-60");

//to know if an element has a functioning class already
console.log($("h1").hasClass("big-text-with-color-pink margin-60"));



                                //MANIPULATING TEXT


//since css cannot change text, we have to select the text without the .css method this way:
$("h1").text("Hi People");
$("button").text("Please Don't Click Me");

//as with pure JS, we can also select the html element, but not with innerHTML this time. Here:
$("h1").html("<em>Holla Amigos</em>")
jQuery("button").html("<em>No hacer clic en mí</em>")


                               //MANIPULATING ATTRIBUTES

//GET
var ourPageLink = $("a").attr("href");
console.log(ourPageLink);

var ourPageLink = $("img").attr("src");
console.log(ourPageLink);

//we can also get it's classes this way since classes are also attributes
var listOfClasses = $("h1").attr("class");
console.log(listOfClasses);

//SET
$("a").attr("href", "https:ojsome.github.io/oj");

//and set the clases too
$("h1").attr("class", "big-text-with-color-pink margin-60 someclass");
console.log($("h1").attr("class"));

//so when there are two parameters, you're setting, as appossed to one, where you're getting

//#endregion




                                // EVENT LISTENERS IN jQuery

$("button").click(function(){
    $("h1").css("color", "brown");
});

$("input").keypress(function(event){
    console.log(event.key);
});

$(document).keypress(function(event){
    $("h1").text(event.key);
});

//there's an even more flexible way to do it

/*

$(document).on("keypress", function(event){
    $("h1").text(event.key);
});

*/

                //WHILE OUR WEBSITE IS UP AND RUNNING, WE CAN STILL ADD HTML ELEMENTS TO IT:

/*

$("h1").before("<button>NEW</button>"); // --->   <button>NEW</button>  <h1>Hello World</h1>
$("h1").after("<button>NEW</button>");  // --->   <h1>Hello World</h1>  <button>NEW</button>
$("h1").prepend("<button>NEW</button>");  // --->   <h1><button>NEW</button>Hello World</h1>  
$("h1").append("<button>NEW</button>");   //  --->   <h1>Hello World<button>NEW</button></h1>  

remvoe elements:

$("button").remove();

*/


                                // BASIC ANIMATIONS

/*
hide 

$("button").on("click", function(){
    $("h1").hide();
});


//show

$("button").on("click", function(){
    $("h1").hide();
});

instead of using hide or show, we can use toggle:

$("button").on("click", function(){
    $("h1").toggle();
});



because hide seems too sudden, we can use the fadeOut/fadeIn methods

fade out

$("button").on("click", function(){
    $("h1").fadeOut();
});

fade in

$("button").on("click", function(){
    $("h1").fadeIn();
});

 
toggle the fading out or in..

$("button").on("click", function(){
    $("h1").fadeToggle();
});

Sliding 

slide up

$("button").on("click", function(){
    $("h1").slideUp();
});

slideDown

$("button").on("click", function(){
    $("h1").slideDown();
});

slide toggle too, of course

$("button").on("click", function(){
    $("h1").slideToggle();
});

*/

//To be more flexible with animations, you can use the animate() method and add some css

// $("button").on("click", function(){
//     $("h1").animate({opacity: 0.3});
// });


//We can also chain animations:

$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.4  });
});


