function bekle() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("İş bitti");
        }, 3000);
    });
}

async function calistir() {
    console.log("Başladı");
    const sonuc = await bekle();
    console.log(sonuc);
}

calistir();
