interface PayMethod{
    M():void;
}
class Credit implements PayMethod{
    M(): void {
        console.log("ชำระเงิน8500โดยใช้บัตรเครดิตหมายเลข12345678");
    }
}

let credit:PayMethod=new Credit();
credit.M();
