function notKontrol(score) {
    return new Promise((resolve, reject) => {
        if (score >= 60) {
            resolve("Geçti");
        } else {
            reject("Kaldı");
        }
    });
}

async function kontrolEt() {
    try {
        const sonuc = await notKontrol(45);
        console.log(sonuc);
    } catch (err) {
        console.log(err);
    }
}

kontrolEt();
