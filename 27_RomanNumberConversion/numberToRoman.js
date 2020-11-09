const nums = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
const roman = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"]

const convertToRoman = (number) => {
    if(typeof number !== 'number')
        number = Number.parseInt(number);
    
    romanNum = '';

    let i = nums.length - 1;
    while(number) {
        
        let unit = Math.floor(number / nums[i]);
        
        while(unit) {
            romanNum += roman[i];
            unit--;
        }

        number = number % nums[i];
        i--;
    }
    return romanNum;
}

console.log(convertToRoman(3549));