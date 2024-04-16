let result = 0;
let t1 = new Date();
for(let i = 0; i < 1e8; i++){
  result = i ** 2;  
}
let t2 = new Date();
console.log(result, t2 - t1);
throw new Error('Ошибка...')