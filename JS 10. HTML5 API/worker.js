var onmessage = ev => {
    console.log('пришли данные',this);
    if ( !isNaN(ev.data.a) && !isNaN(ev.data.b) ){
        postMessage(ev.data.a +ev.data.b);
    }
}