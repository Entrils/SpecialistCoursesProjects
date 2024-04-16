const p6 =fn1();
p6.then ( result => console.log(result))

const getPostsByUser = async (name)=>{
    try{
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(result =>result.json());
    const userId =users.filter(user => user.name ==name)[0]["id"];

    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((response)=> response.json())

    return posts;
}catch(err){
    return ['Ошибка']
}
}

getPostsByUser("Leanne Graham")
.then(posts => console.log(`Count of posts: ${posts.length}`))
.catch(error => console.log(error));


const ayncIterator ={
    [Symbol.asyncIterator](){
        const usersPromises = fetch('https://jsonplaceholder.typicode.com/users')
           .then(result => result.json()); 


        return{
            i: 0,
             async next(){
                if(this.i <user.length){
                    return {value: users[this.i++], dont: false};
                }
                return {done: true}
            }
        }
    }
}

(async function(){
for await ( let item of asyncIterator){
    console.log(item);
}
})();