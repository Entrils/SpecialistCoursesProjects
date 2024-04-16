// Задача 1
const range = {from: 2,to: 100, delta: 3};

range[Symbol.iterator]=function(){
    const{from,to,delta} =this;
    let i =from;
    return{
        next(){
            if (typeof i== 'undefined'){
                i = from;
            }
            else{
                i +=delta;
            }
            return i < to ? {value: i,done:false}: {done: true};
        }
    }

}

for (let num of range){ console.log(num)}; 

//Задача 2

function* fibonaciGenerator(){
    let n1=0,n2=1;
yield n1;
yield n2;

while(true){
    yield n1+n2;
    n3=n1;
    n1=n2;
    n2=n1+n3;
}

}
const fibonaciIterator =fibonaciGenerator();
for (let i=0;i<20;i++){
    let result = fibonaciIterator.next();
    console.log(result.value);
}