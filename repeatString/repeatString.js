const repeatString = function(string, times) {
    let word = "";
    if(times >= 0){
        for (let i = 0; i < times; i++){
            word += string;
        }
        return word
    }
    else{
        return "ERROR"
    }
    
}

module.exports = repeatString
