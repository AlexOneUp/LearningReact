function choice(arr) {
    let indexRandom = Math.floor(Math.random() * arr.length);
    return arr[indexRandom];
}
export {choice};