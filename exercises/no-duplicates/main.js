var removeDups = function(str) {
    var output = {
        noDups: '',
        dups: ''
    };

    for(var i = 0; i < str.length; i++) {
        if(output.noDups.includes(str[i])) {
            output.dups += str[i];
        } else {
            output.noDups += str[i];
        }
    }

    //another approach using indexOf (indexOf returns "-1" if the character is not found in the string)
    // for(var i = 0; i < str.length; i++) {
    //     if(output.noDups.indexOf(str[i]) === -1) {
    //         output.noDups += str[i];
    //     } else {
    //         output.dups += str[i];
    //     }
    // }

    return output;
}

console.log(removeDups("Hello world, how are you?"));

// Given a string, your task is to remove any duplicated letters from it. 
// Any letters you remove should be added to another string called "duplicates".

// var input = "bookkeeper larry";

// No duplicates: "bokepr lay"
// The Extras: "okeerr"