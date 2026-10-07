abstract class ShippingCalculator{
    num:number;
    constructor(num:number){
        this.num=num;
    }
    abstract low():void;
    n():void{
        console.log("ค่าจัดส่งตามน้ำหนัก");
    }
}
class StandrdShipping extends ShippingCalculator {
    private Kilo:number;
    }

const dog = new Dog("luky");
dog.makeSound();
dog.sleep();