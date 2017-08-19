export class CreditCard {
    number = '5105105105105100';
    number_style = "border: 2px inset #EBE9ED;";
    type = 'VISA';


    numberChanged(newVal) {
        // do what you want...
        if(luhnChk(newVal.value)){
            // Valid credit card number.
            this.number_style = "border: 2px inset green;";
        }
        else{
            // Invalid credit card number.
            this.number_style = "border: 2px inset red;";
        }
     }

}

/**
 * Luhn algorithm in JavaScript: validate credit card number supplied as string of numbers
 * @author ShirtlessKirk. Copyright (c) 2012.
 * @license WTFPL (http://www.wtfpl.net/txt/copying)
 */
var luhnChk = (function (arr) {
    return function (ccNum) {
        var 
            len = ccNum.length,
            bit = 1,
            sum = 0,
            val;

        while (len) {
            val = parseInt(ccNum.charAt(--len), 10);
            sum += (bit ^= 1) ? arr[val] : val;
        }

        return sum && sum % 10 === 0;
    };
}([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]));