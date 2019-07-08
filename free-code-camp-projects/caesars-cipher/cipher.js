function rot13(str) { // LBH QVQ VG!
  var cipherLetters=[];
  var listOfLetters = "abcdefghijklmnopqrstuvwxyzabcdefghijklm".toUpperCase().split("");
  
  for(var m=0;m<str.length;m++){
    if(listOfLetters.indexOf(str[m]) == -1){
        cipherLetters.push(str[m])
    }

      for(var i=0;i<listOfLetters.length;i++){                                                                                                                                  
        if(listOfLetters[i]==str[m]&& i<=25){
           cipherLetters.push(listOfLetters[i+13])
        } 
    }
    
}

return cipherLetters.join("");
}
    
    // Change the inputs below to test
    console.log(rot13("SERR YBIR?"));

    console.log("moral".indexOf("y"));