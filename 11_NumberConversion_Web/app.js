function decimalToBinary(num) {
    var bin = 0;
    var i = 0;
    while(num>0) {
        var r = num % 2;
        num = Math.floor(num/2);
        bin += (10**i++) * r; 
    }

    return bin;
}

function decimalToHex(num) {
    var vals = {
        10:'A',
        11:'B',
        12:'C',
        13:'D',
        14:'E',
        15:'F'
    };

    var hex = '';
    while(num>0) {
        var r = num%16;
        num = Math.floor(num/16);
        if(r in vals) {
            hex = vals[r] + hex;
        }
        else {
            hex = r + hex;
        }
    }

    return hex;
}

function hexToDecimal(num) {
    var vals = {
        'A':10,
        'B':11,
        'C':12,
        'D':13,
        'E':14,
        'F':15
    };

    var dec = 0;
    var len = num.length;
    var i = len-1;
    while(i>=0) {
        if(num[i] in vals) {
            dec = dec + Number.parseInt(vals[num[i]] * (16**(len-i-1)));
        }
        else {
            dec = dec + Number.parseInt(num[i] * (16**(len-i-1)));
        }
        i--;
    }

    return dec;
}

function binaryToDecimal(num) {
    var dec = 0;
    var i = 0;
    while(num>0) {
        var r = num%10;
        num = Math.floor(num/10);
        dec += (r * (2**i));
        i++;
    }
    return dec;
}

function binaryToHex(num) {
    num = binaryToDecimal(num);
    return decimalToHex(num);
}

function hexToBinary(num) {
    num = hexToDecimal(num);
    return decimalToBinary(num);
}

var calculator = document.getElementById("calculator");
calculator.style.display = "none";

var sel = document.getElementById("format_f");
var from = sel.options[sel.selectedIndex].value;

var sel2 = document.getElementById("format_t");
var to = sel2.options[sel2.selectedIndex].value;

document.addEventListener('input', function (event) {

	// Only run for #wizard select
	if (event.target.id === 'format_f') {
        from = event.target.value;
    }
    else if (event.target.id === 'format_t') {
        to = event.target.value;
    }
    else
        return;
    
    displayCalculator(from, to);

}, false);

function displayCalculator(from, to) {
    calculator.style.display = "block";
    document.getElementById("inputText").innerText = `Enter ${from} number: `;
    document.getElementById("outputText").innerText = `The ${to} form of above is: `;
    document.getElementById("input").value = '';
    document.getElementById("output").value = '';
}

function startConverstion() {
    var input = document.getElementById("input").value;
    var result;

    if(from === 'decimal') {
        switch(to) {
            case 'binary': result = decimalToBinary(Number.parseInt(input));
                            break;
            case 'hexadecimal': result = decimalToHex(Number.parseInt(input));
                                break;
            default:    result = input;
        }
    }

    else if(from === 'hexadecimal') {
        switch(to) {
            case 'binary': result = hexToBinary(input);
                            break;
            case 'decimal': result = hexToDecimal(input);
                                break;
            default:    result = input;
        }
    }

    else {
        switch(to) {
            case 'decimal': result = binaryToDecimal(input);
                            break;
            case 'hexadecimal': result = binaryToHex(input);
                                break;
            default:    result = input;
        }
    }
    document.getElementById("output").value = result;
}
