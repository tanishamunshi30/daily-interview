function replaceAt( str, index, replacement) {
    return str.substr(0, index) + replacement+ str.substr(index + replacement.length);
    
}

function dominoes(str) {
  let newstr = ""
  for (var i=0; i != str.length; i++) {
    if(i == 0){
      if ( str.charAt(1)== 'L') {
        newstr = 'L';
      }
      else{
        newstr = newstr + str.charAt(i);
      }
      continue;
    }
    if(i == str.length-1){
      if ( str.charAt(str.length-2)== 'R') {
        newstr = newstr + 'R';
      }
      else{
        newstr = newstr + str.charAt(i);
      }
      continue;
    }
  if((str.charAt(i-1)=='R' && str.charAt(i+1)=='L') || (str.charAt(i-1)=='L' && str.charAt(i+1)=='R') || (str.charAt(i-1) == '.' && str.charAt(i+1) == '.'))
  {
    newstr = newstr + str.charAt(i);
    continue;
  }
  if(str.charAt(i-1)=='R')
  {
    newstr = newstr + 'R'
  }
  if(str.charAt(i+1) == 'L')
  {
    newstr = newstr + 'L'
  }
  
  }
  return newstr;
}

dominoes('..R...L..R.');

//output ..RR.LL..RR