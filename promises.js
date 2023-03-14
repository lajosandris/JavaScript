function getX() {
    return Math.random() >= 0.5;

}

let wait = new Promise ((resolve, reject) =>{
    const x = getX();

    if(x) {
        return setTimeout (resolve, 1000);
    }
    return setTimeout (reject, 1000);
})
.then(() => console.log('yay'))
.catch(() => console.log('Oh no!'));