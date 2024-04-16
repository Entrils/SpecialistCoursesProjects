var onmessage = function(e){
  console.log('Мы получили данные:', e.data);
  let {s, p, n} = e.data;
  if( !isNaN(s) && !isNaN(p) && !isNaN(n)){
    p /= 1200;//перевод в доли за месяц
    n *= 12; 
    let A = s * p / (1 - (1 + p) ** (-n));
    postMessage(A.toFixed(2))
  }
}