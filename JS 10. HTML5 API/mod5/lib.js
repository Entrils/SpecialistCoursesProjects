const $ = tag => document.createElement(tag);

/*  */
function addBasket(ev){
  /*
  Из текущей гиперссылки получить uid добавляемого в корзину товара. 
  Получить из localStorage величину по ключу 'basket', при помощи JSON.parse
  воссоздать объект. Если в объекте есть товар с добавляемым uid, то 
  увеличить количество товаров с этим uid, иначе создать в корзине
  товар с этим uid и установить количество в 1.
  Примечание: отмените действие по умолчанию для ссылки
  */
 ev.preventDefault();
 let uid = this.getAttribute('data-uid');
 let basket = localStorage.getItem('basket');
 console.log(basket);
 basket = JSON.parse(basket);

 if( uid in basket ){
   basket[uid]++;
 }else {
   basket[uid] = 1;
 }
 localStorage.setItem('basket', JSON.stringify(basket))
 fnUpdate();
}
function createItem( goods ){
  let {uid, title, description, price} = goods;

  let item = $('div');
  item.className = 'item';
  
  let h3 = $('h3');
  h3.innerHTML = title;
  
  let p1 = $('p');
  p1.innerHTML = description;

  let p2 = $('p');
  p2.innerHTML = `Цена ${price} руб.`;

  let a = $('a');
  a.innerHTML = 'В корзину';
  a.href = '#';
  a.setAttribute('data-uid', uid);
  a.addEventListener('click', addBasket);

  item.appendChild(h3);
  item.appendChild(p1);
  item.appendChild(p2);
  item.appendChild(a);
  return item;
}

/* Создать функцию fnUpdate(), внутри получить ссылку на элемент с id=result, почистить его содержимое innerHTML, пройти по корзине из localstorage и вывести все товары из корзины.
      Вызвать функцию после инициализации корзины */
      function getIdByUid( uid ){
        for(let i = 0; i < items.length; i++){
          if(items[i].uid == uid) return i;
        }
      }
      function fnUpdate(){
        let result = document.querySelector('#result');
        result.innerHTML = '';
        console.log(result);

        let basket = localStorage.getItem('basket');
        basket = JSON.parse(basket);

        for(let i in basket){
          result.innerHTML += `${items[getIdByUid(i)]['title']} - ${basket[i]} шт.<br />`;
        }
      }