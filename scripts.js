/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Palantir.

Write an algorithm to justify text. Given a sequence of words and an integer line length k, return a list of strings which represents each line, fully justified.

More specifically, you should have as many words as possible in each line. There should be at least one space between each word. Pad extra spaces when necessary so that each line has exactly length k. Spaces should be distributed as equally as possible, with the extra spaces, if any, distributed starting from the left.

If you can only fit one word on a line, then you should pad the right-hand side with spaces.

Each word is guaranteed not to be longer than k.

For example, given the list of words ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"] and k = 16, you should return the following:

["the  quick brown", # 1 extra space on the left
"fox  jumps  over", # 2 extra spaces distributed evenly
"the   lazy   dog"] # 4 extra spaces distributed evenly

*/

const makeRandomNum = (lower, upper) => {
  return Math.round(Math.random()*(upper-lower)+lower);
}

const makeRandomWord = () => {
  let output = '';
  for (i=0; i < makeRandomNum(1,5); i++) {
    output = output+String.fromCharCode(makeRandomNum(97,122))
  }
  return output
}

const justify = (sentence,k) => {
  let output = []
  let temp = ''
  let e;
  for (e of sentence) {
    if (temp.length+1+e.length <= k)
    {
      if (temp === '') {temp = e} else {temp = temp+' '+e}
    } else
    {
      let extraSpace = k-temp.length;
      for (i=0; i<extraSpace; i++)
      {
        temp = temp+' ';
      }
      output.push(temp);
      temp = e;
    }
    if (e === sentence[sentence.length-1])
    {
      let extraSpace = k-temp.length;
      for (i=0; i<extraSpace; i++)
      {
        temp = temp+' ';
      }
      output.push(temp)
    }
    console.log('this is temp: ',temp)
  }
  return output
}



$(document).ready(function() {
  let k = 16;
  let sentence = [
    'the',
    'quick',
    'brown',
    'fox',
    'jumps',
    'over',
    'the',
    'lazy',
    'dog'
    ]
    let result = justify(sentence,k)
    console.log(result)
  $('#output-section-1').text(JSON.stringify(sentence));
  $('#output-section-2').text(JSON.stringify(result));

});
