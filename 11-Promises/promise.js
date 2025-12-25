function bekle() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("İş bitti");
            reject("İş bitmedi");
        }, 3000);
    });
}
console.log(bekle())

bekle().then(result => {
    console.log(result);
});
