class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    getName () {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getWeight () {
        return this.weight;
    }
    getGender() {
        if (this.isMale()) {
            return "male";
        }else {
            return "female";
        }
    }
    setWeight() {
        this.weight = weight;
    }
    isMale () {
        if(this.gender == 1) {
            return true;
        }else {
            return false;
        }
    }
    say(string) {
        console.log(string);
    }
    checkApple(apple){
        return apple.isEmpty();
    }

    eat(apple){
        if(apple.getWeight() > 0){
            apple.decreaseApple();
            this.weight++;
        }else {
            alert("Táo đã hết");
        }
    }

    getInfo(human){
        alert(human.name + " " +human.weight + " " +human.getGender());
    }
}
