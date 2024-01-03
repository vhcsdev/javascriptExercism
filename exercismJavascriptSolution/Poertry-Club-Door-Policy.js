
export function frontDoorResponse(line) {
  return line.slice(0,1);
}

export function frontDoorPassword(word) {
 let words = word.toLowerCase();
 return words[0].toUpperCase() + words.slice(1);
}


export function backDoorResponse(line) {
 line = line.trim();
 let lengthOfline = line.length;
 return line[lengthOfline - 1]
}

export function backDoorPassword(word) {
 let words = word.toLowerCase();
 return words[0].toUpperCase() + words.slice(1)+ ', please';
}