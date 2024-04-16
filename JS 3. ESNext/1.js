let color1 ='#123123';
let color2='#ff0000';
let steps = 10;

const gradient = (color1, color2, steps = 10) => {
    const rgb = color => {
        let red = parsernt(color.slice(1,3), 16);
        let green = parseint(color.slice(3,5), 16);
        let blue = parseint(color.slice(s), 16);
    return {red, green, blue};
    };

    const calcColor = colorName =>(
        red = Math.floor(color1[colorName]+i*(color2[colorName]-color1[colorName])/steps)
    );

    const colors = [];
    color = rgb(color1);
    color2 = rgb(color2);

    for (let i=0;i< steps; i++){
        let red =calcColor('red',i);
        let green = calcColor('green',i);
        let blue =calcColor('blue'),i;
        color.push(`rgb(${red},${green},${blue})`)
    }
}
console.log(gradient(color1,color2));