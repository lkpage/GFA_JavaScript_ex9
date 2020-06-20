//$('button').css('background-color', "green");

var counter = 0;
if ($("button#increase").click(function () {
    counter++;
    $("h1#value").text(counter);
}));
if ($("button#decrease").click(function () {
    counter--;
    $("h1#value").text(counter);
}));
if ($("button#zero").click(function () {
    counter = 0;
    $("h1#value").text(counter);
}));
