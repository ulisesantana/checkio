export default function cutText(numOfChars: number, text: string): string {
<<<<<<< HEAD
  let words: string[] = text.split(" ");
  let dots: string = "..."
  let output: string = getOutput(numOfChars, text);
  
=======
>>>>>>> 3cd643f2be50b56dfb61458faea532dfc15453c2
  if (numOfChars > text.length){
    return text
  }
  
<<<<<<< HEAD
  if (lastCharIsASpace(output, words[0])) {
    numOfChars--;
  }
=======
  let words: string[] = text.split(" ");
  let dots: string = "..."
  let output: string = getOutput(numOfChars, text);

>>>>>>> 3cd643f2be50b56dfb61458faea532dfc15453c2

  while (!isDone(output, words[0])) {
    
    if (numOfChars === 0) {
      return getOutput(numOfChars, text).concat(dots);
    }
    
    numOfChars--;
    output = getOutput(numOfChars, text);
  }

<<<<<<< HEAD
  return getOutput(numOfChars, text).concat(dots);
}



=======
  if (lastCharIsASpace(output, words[0])) {
    numOfChars--;
  }

  return getOutput(numOfChars, text).concat(dots);
}

>>>>>>> 3cd643f2be50b56dfb61458faea532dfc15453c2
function getOutput(numOfChars: number, text: string): string {
  return text.slice(0, numOfChars);
}

function isDone(output: string, firstWord: string): boolean {
  return isTheFirstWord(output, firstWord) || lastCharIsASpace(output, firstWord);
}

function isTheFirstWord(output: string, firstWord: string): boolean {
  return output.length === firstWord.length;
}

function lastCharIsASpace(output: string, firstWord: string): boolean {
  return output[output.length - 1] === " ";
}