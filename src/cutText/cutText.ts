export default function cutText(numOfChars: number, text: string): string {
  let words: string[] = text.split(" ");
  let dots: string = "..."
  let output: string = getOutput(numOfChars, text);
  
  if (numOfChars > text.length){
    return text
  }
  
  if (lastCharIsASpace(output, words[0])) {
    numOfChars--;
  }

  while (!isDone(output, words[0])) {
    
    if (numOfChars === 0) {
      return getOutput(numOfChars, text).concat(dots);
    }
    
    numOfChars--;
    output = getOutput(numOfChars, text);
  }

  return getOutput(numOfChars, text).concat(dots);
}



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