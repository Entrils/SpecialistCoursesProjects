let connected = false;
let i = 0;
self.addEventListener('connect', e => {
  e.source.addEventListener('message', ev =>{
    if( ev.data == 'Старт' ){
      if( connected === false ){
        e.source.postMessage(`Помощник стартовал первый раз`);
        connected = true;
      } else {
        e.source.postMessage(`Помощник стартовал ранее с i = ${++i}`);
      }
    }
  })
  e.source.start();
})