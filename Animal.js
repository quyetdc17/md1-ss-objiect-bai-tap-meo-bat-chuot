class Animal {
    name;
    weight;
    speed;
    say;

    constructor(name, weight, speed, say) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.say = say;
    }
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setWeight(weight){
        this.weight = weight;

    }
    getWeight(){
        return this.weight;
    }
    setSpeed(speed){
        this.speed = speed;
    }
    getSpeed(){
        return this.speed;
    }
    setSay(say){
        this.say = say;
    }
    getSay(){
        return this.say;
    }
}