function notKontrol(score) {
    return new Promise((resolve, reject) => {
        if (score >= 60) {
            resolve("Geçti");
        } else {
            reject("Kaldı");
        }
    });
}

notKontrol(45)
    .then(result => console.log(result)) // resolve için
    .catch(error => console.log(error)); // reject için
