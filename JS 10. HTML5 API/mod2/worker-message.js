var onmessage = function(e){
  console.log('Мы получили данные:', e.data);
  let [word1, word2] = e.data;
  postMessage(`${word1} ${word2}`)
}