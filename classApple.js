class Apple {
    constructor (weigth) {
        this.weigth = weigth;
    }
    getWeight() {
        return this.weigth
    }
    isEmpty() {
        if (this.weigth <=0) {
            return true;
        }else {
            return false;
        }
    }
    decreaseApple() {
        if (this.isEmpty()) {
            alert("Táo đã hết rồi");
        }else {
            this.weigth--;
        }
    }
}