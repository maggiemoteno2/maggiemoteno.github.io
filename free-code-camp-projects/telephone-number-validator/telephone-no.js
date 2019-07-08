function telephoneCheck(str)
{
    //Use RegEx to validate US numbers
  var phoneno = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/
  if(str.match(phoneno))
        {
      return true;
        }
      else
        {
    
        return false;
        }
}

console.log(telephoneCheck("1 555-555-5555"));