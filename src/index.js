module.exports = function toReadable (number) {
    const numbersWords = {
        'ones': ['zero','one','two','three','four','five','six','seven','eight','nine'],
        'secondTen': ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'],
        'tens': [,'ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
    }
    let numberOfDigits = String(number).length;
    switch (numberOfDigits) {
        case 1:
            return (numbersWords.ones[number]);
            break;
        case 2:
            if (number < 20){
                return (numbersWords.secondTen[number-10]);
            } else if (number%10 === 0) {
                return (numbersWords.tens[number/10]);
            } else {
                return (numbersWords.tens[Math.trunc(number/10)]
                            + " "
                            + numbersWords.ones[number-Math.trunc(number/10)*10]);
            }
            break;
        case 3:
            if (number%100 === 0){
                return (numbersWords.ones[Math.trunc(number/100)]
                            + " "
                            + "hundred");
            } else if (number%10 === 0){
                return (numbersWords.ones[Math.trunc(number/100)]
                            + " "
                            + "hundred"
                            + " "
                            + numbersWords.tens[(number%100)/10]);
            } else if (number - Math.trunc(number/100)*100 < 10) {
                return (numbersWords.ones[Math.trunc(number/100)]
                            + " "
                            + "hundred"
                            + " "
                            + numbersWords.ones[number - Math.trunc(number/100)*100]);
            } else if (number - Math.trunc(number/100)*100 < 20) {
                return (numbersWords.ones[Math.trunc(number/100)]
                            + " "
                            + "hundred"
                            + " "
                            + numbersWords.secondTen[(number - Math.trunc(number/100)*100)-10]);
            } else {
                return (numbersWords.ones[Math.trunc(number/100)]
                            + " "
                            + "hundred"
                            + " "
                            + numbersWords.tens[(number - Math.trunc(number/100)*100 - (number - Math.trunc(number/10)*10))/10]
                            + " "
                            + numbersWords.ones[number - Math.trunc(number/10)*10]);
            }
            break; 
    }
}
