var readlineSync = require('readline-Sync');

function XOREncryptDecrypt(data, key) {
    var cypher = '';

    while(data.length > key.length) {
        key += key;
    }

    for (var i=0; i<data.length; i++) {
        var val1 = data[i].charCodeAt(0);
        var val2 = key[i].charCodeAt(0);

        var xorVal = val1 ^ val2;
        cypher += String.fromCharCode(xorVal);
    }

    return cypher;
}

function takeUserInput() {
    var data = readlineSync.question("Enter the Data to Encrypt: ");
    var key = readlineSync.question("Enter the Key: ");
    return [data, key];
}

function main() {
    var ans = 'y';
    var cypher = '';
    while(ans !== 'N') {
        console.log("Select the option:");
        console.log("1. Encrypt the Data.");
        console.log("2. Decrypt the Data.");
        console.log("3. Exit");
        var selection = readlineSync.question("");
        switch(selection) {
            case '1':   var inputs = takeUserInput();
                        cypher = XOREncryptDecrypt(inputs[0], inputs[1]);
                        console.log(`Encrypted Data is: ${cypher}`);
                        break;
            case '2':   if(cypher !== '') {
                            var key = readlineSync.question("Enter the Key: ");
                            var decypher = XOREncryptDecrypt(cypher, key);
                            console.log(`Decrypted Data is: ${decypher}`);
                        }
                        else {
                            console.log("Please Encrypt the data first!");
                        }
                        break;
            case '3':   ans = 'N';
        }
    }
}

main();