import cutText from './cutText';
import * as assert from 'assert';

describe("cutText",  () => {

  it('Should be true',  () => {
    assert.equal(true, true);
  });

  const useCases = [
    {
      text: "",
      numOfChars: 0,
      answer: "..."
    },
    {
      text: "Hi everybody!",
      numOfChars: 2,
      answer: "Hi..."
    },  
    {
      text: "Hi everybody!",
      numOfChars: 3,
      answer: "Hi..."
    },  
    {
      text: "Hi everybody!",
      numOfChars: 6,
      answer: "Hi..."
    },  
    {
      text: "Hi everybody! Get fun!",
      numOfChars: 17,
      answer: "Hi everybody!..."
    },  
    {
      text: "Hi everybody! Get fun!",
      numOfChars: 21,
      answer: "Hi everybody! Get..."
    },  
    {
      text: "Hi everybody! Get fun!",
      numOfChars: 150,
      answer: "Hi everybody! Get fun!"
    },  
  ];

  useCases.forEach((useCase) => {
    let test = `cutText(${useCase.numOfChars}, "${useCase.text}")`;
    it(`Should retrieve "${useCase.answer}". ${test}`,  () => {
      assert.deepEqual(cutText(useCase.numOfChars, useCase.text), useCase.answer);
    });
  });

});

