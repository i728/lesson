let money = Number(process.argv[2]);
let oneHundred = Math.floor(money/100);
let nokori1 = money%100;
let ten = Math.floor(nokori1/10);
let one = nokori1%10;

if(isNaN(money) || money === Infinity){
    console.log('Ellor:Arguments');
}else{
    console.log('100円玉' + oneHundred + '枚, 10円玉' + ten + '枚, 1円玉' + one + '枚');
}