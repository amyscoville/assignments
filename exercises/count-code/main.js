// Write a function that returns the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the "d", so "cope" and "cooe" would also count.

// countCode("aaacodebbb") -> 1 
// countCode("codexxcode") -> 2 
// countCode("cozexxcope") -> 2

function countCode(str) {
    str = str.toLowerCase();
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === 'c') {
            if(/(co([a-z])e)/.test(str.slice(i, i+4))) {
                count++;
                i += 3;
            }
        }
    }
    return count;
}

console.log(countCode('happycocecodecodecodecopecorecolepantscolefeet'));

//more elegant solution:

function countCode2(str) {
    return str.match(/co[a-z]e/g).length;
}

console.log(countCode2('happycocecodecorecolepantscolefeet'));

//regex - /co.*?e/g
