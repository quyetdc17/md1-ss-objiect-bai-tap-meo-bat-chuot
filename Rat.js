class Rat extends Animal{
status;
    constructor(name, weight, speed, say,status) {
        super(name, weight, speed, say);
        this.status = status;
    }
    setStatus(status){
        this.status = status;
    }
    getStatus(){
        return this.status;
    }
    ratSay(){
        if (this.status){
            super.getSay();
        }else {
            super.setSay('tao chet roi');
            // console.log('tao chet roi');
        }
        return super.getSay();
    }
}