function convert(farenhait) {
    return (farenhait - 32) * (5 / 9)
}
// 2
function convert2(inches) {
    return (inches * 0.0256)
}
//3
const convert = (mil) => {
    let sec = Math.floor(mil / 1000);
    let min = Math.floor(sec / 60);
    let hour = Math.floor(min / 60);
    let day = Math.floor(hour / 24);
    sec = sec % 60;
    min = min % 60;
    hour = hour % 24;
    mili = mil - (day * 1000 * 60 * 60 * 24) - (hour * 1000 * 60 * 60) - (min * 1000 * 60) - (sec * 1000)

    return `${day} days and ${hour} hours and ${min} minutes and ${sec} seconds and ${mili} milliseconds`

}

console.log(convert());
//4
const calcBmi = (w, h) => {
    let calc = ((w) / ((h * h) / 100)) * 100;
    calc = calc.toFixed(1);

    if (calc < 18.5) {
        console.log('چوب خشک');
    } else if (18.5 < calc && calc < 24.9) {
        console.log('عادی');
    } else if (25 < calc && calc < 29.9) {
        console.log('چاق');
    } else if (30 < calc && calc < 40) {
        console.log('خیکی');
    }
    return calc
};

console.log(calcBmi(85, 183));
//5
let arr = [43, 25, 11, 44, 1, 3, 5, 7, 9, 2, 75, 23, 33, 77, 54, 64, 35, 15, 75]

arr.sort((a, b) => {
    return a - b
})

console.log(arr);
//7
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res = arr.reduce((sum, current) => sum + current, 0);
console.log(res);
//10
function numberToText(number, order = 0) {
    const yekan = ["", "یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه"];
    const dahgan = ["", "ده", "بیست", "سی", "چهل", "پنجاه", "شصت", "هفتاد", "هشتاد", "نود"];
    const sadgan = ["", "صد", "دویست", "سیصد", "چهارصد", "پانصد", "ششصد", "هفتصد", "هشتصد", "نهصد"]
    const teens = ["ده", "یازده", "دوازده", "سیزده", "چهارده", "پانزده", "شانزده", "هفده", "هجده", "نوزده"];
    const orderText = ["", "هزار", "میلیون", "میلیارد", "هزار میلیارد", "هزار هزار میلیارد"]
    let res = "";
    let resultArray;
    if (number > 1000) {
        res = numberToText(Math.floor(number / 1000), order + 1);
    }
    let stringNumber = "00" + String(number);
    stringNumber = stringNumber.substr(stringNumber.length - 3);
    if (stringNumber[1] === "1") {
        resultArray = [sadgan[stringNumber[0]], teens[stringNumber[2]]]
    } else {
        resultArray = [sadgan[stringNumber[0]], dahgan[stringNumber[1]], yekan[stringNumber[2]]]
    }

    return (res && res + " و ") + resultArray.filter(item => {
        return item
    }).join(" و ") + " " + orderText[order]
}

console.log(numberToText(2355451101))
//8
function caesarEncrypt(string) {
    let res = '';
    for (let index = 0; index < string.length; index++) {
        res += String.fromCodePoint(string[index].codePointAt(0) + 3);
    }
    return res;
}

function caesarDecrypt(string) {
    let res = '';
    for (let index = 0; index < string.length; index++) {
        res += String.fromCodePoint(string[index].codePointAt(0) - 3);
    }
    return res;
}

console.log(caesarEncrypt("Hello"))
console.log(caesarDecrypt("Khoor"))