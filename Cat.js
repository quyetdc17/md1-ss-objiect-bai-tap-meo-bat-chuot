class Cat extends Animal{

    constructor(name, weight, speed, say) {
        super(name, weight, speed, say);
    }
    catchMouse(rat){
        if (super.getSpeed() > rat.getSpeed()){
            console.log('he he!');
            rat.setStatus(false);
            rat.setSay('tao chet roi');
        }else{
            console.log('no chay nanh vai toa met qua');
        }
    }
    eatMouse(rat){
        if (!rat.getStatus()){
            super.setWeight(super.getWeight()+rat.getWeight())
            console.log('khoi luong cua meo sau khi an  >>'+ super.getWeight());
        }else {
            console.log('co bat duoc dau ma an')
        }
    }

}