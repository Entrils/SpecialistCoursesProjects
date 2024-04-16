addEventListener('message', ev => {
    //получили дерево-объект
    let tree = ev.data;

    
    function fn(tree){
        let result ='<ul>';
        for(let i in tree){
            if(typeof tree[i]=='string'){
                result += `<li><a href="${tree[i]}">${i}</a>`;
            }else{
                result += `<li>${i} ${fn(tree[i])}</li>`
            }
        }
        
         return result +='</ul>';
    }

    let menu = fn(tree);
    //отправка строки
    postMessage(menu);
})

fetch("mock-request.json")
            .then( response => response.json())
            .then( result => console.log(result))