const wordDict = {
    1 : 'One', 2 : 'Two', 3 : 'Three', 4 : 'Four', 5 : 'Five',
    6 : 'Six', 7 : 'Seven', 8 : 'Eight', 9 : 'Nine', 10 : 'Ten',
    11 : 'Eleven', 12 : 'Twelve', 13 : 'Thirteen', 14 : 'Fourteen', 15 : 'Fifteen',
    16 : 'Sixteen', 17 : 'Seventeen', 18 : 'Eighteen', 19 : 'Ninteen', 20 : 'Twenty',
    30 : 'Thirty', 40 : 'Fourty', 50 : 'Fifty', 60 : 'Sixty', 70 : 'Seventy', 80 : 'Eighty',
    90 : 'Ninty', 100 : 'Hundred', 1000 : 'Thousand'
}

const convertToWord = (number) => {
    if(typeof number !== 'number')
        number = Number.parseInt(number);

    let finalWord = '';
    let len = number.toString().length;
    let unit = 0;
    let num = 0;
    let word = '';
    while(len > 0) {
        word = '';
        unit = 10 ** (len - 1);
        num = Math.floor(number / unit);
        
        if( num !== 0 && len > 2)
            word = wordDict[num] + " " + wordDict[unit];
        else if(len <= 2) {
            if(num == 1) {
                word = wordDict[number];
                len = 1;
            }
            else {
                if(num !== 0)
                    word = wordDict[num * unit] + " ";
                num = number % 10;
                if(num !== 0)
                    word += wordDict[num];
                len = 1;
            }
        }

        if(word !== '')
            finalWord += word + " ";

        number = number % unit;
        len--;
    }

    return finalWord;
}

console.log(convertToWord(3462));
console.log(convertToWord(3012));
console.log(convertToWord(9020));
console.log(convertToWord('0012'));
console.log(convertToWord('786'));
console.log(convertToWord('38'));