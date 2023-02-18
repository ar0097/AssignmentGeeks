function swapValues(x,y) {
    console.log(x,y);
    [x,y] = [y,x];
    console.log(x,y)
}

swapValues(10,20);