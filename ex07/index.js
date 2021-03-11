function main(){
    // Only change code below this line
    // Variable declarations
    var StUdLyCapVar;
    var properCamelCase;
    var TitleCaseOver;

    // Variable assignments
    STUDLYCAPVAR = 10;
    PRoperCAmelCAse = "A String";
    tiITLEcASEoVER = 9000;
    const camelCaseIt = string => string.toLowerCase().trim().split(/[.\-_\s]/g).reduce((string, word) => string + word[0].toUpperCase() + word.slice(1));
    // Only change code above this line
    return{
        studlyCapVar,
        properCamelCase,
        titleCaseOver
    }

}
console.log(main());
module.exports =main;