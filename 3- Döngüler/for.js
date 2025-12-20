let total = 0;


for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log(i)
        total += i;
    }
}

console.log(`Total: ${total}`);