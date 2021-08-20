function choice(arrItems) {
    let i = Math.floor(Math.random() * arrItems.length);
    return arrItems[i];
}

function remove(arrItems, item) {
    for (let i = 0; i < arrItems.length; i++) {
        if (arrItems[i] === item) {
            return [...arrItems.slice(0, i), ...arrItems.slice(i + 1)];
        }
    }
}

export { choice, remove };