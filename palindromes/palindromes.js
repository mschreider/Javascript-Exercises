function palindromes(phrase) {
    let phrase_reverse = "";
    for(let x = phrase.length -1; x>=0; x--){
        if( phrase[x].toUpperCase() != phrase[x].toLowerCase() ){  
          phrase_reverse += phrase[x];
        }
        else{
          phrase = phrase.replace(phrase[x],'');
        }
    }
    if(phrase_reverse.toLowerCase() == phrase.toLowerCase()){
        return true;
    }
    else {
        return false;
    }
}

module.exports = palindromes
