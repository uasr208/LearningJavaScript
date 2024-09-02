let scores = [99, 87, 77, 95, 92];
let sum = 0;

for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
}

console.log("Sum:", sum);
console.log("Average:", Math.floor(sum / scores.length));
