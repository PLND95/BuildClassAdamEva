let adam = new Human("adam", 1, 65);
let eva = new Human("eva", 2, 55);
let apple_1 = new Apple(10);


// adam.checkApple(apple_1)
adam.say("I am Adam" + "<br>");
eva.say("I am Eva" + "<br>");


while (apple_1.isEmpty() !== true) {
    document.write("Adam ăn táo" + "<br>");
    adam.eat(apple_1);

    document.write("Quả táo còn: " + "<br>");
    document.write(apple_1.getWeight() + " đơn vị" + "<br>");
    document.write( "Cân nặng của Adm là: " + adam.getWeight() + " đơn vị" + "<br>");

    document.write("<br>")
    
    document.write("Eva ăn táo" + "<br>");
    eva.eat(apple_1);

    document.write("Quả táo còn: " + "<br>");
    document.write(apple_1.getWeight() + " đơn vị" + "<br>");
    document.write( "Cân nặng là: " + eva.getWeight() + " đơn vị" + "<br>");
}