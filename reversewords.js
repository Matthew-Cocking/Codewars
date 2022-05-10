function reverseWords(str) {
    console.log(str);
   
    let words = str.split("").reverse().join("").split(" ").reverse().join(" ");
    
    return words;
  }