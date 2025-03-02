

const radius = 5 
const pi = 3.1415
const area = pi * radius * radius
const plantSize = 0.8
let currentPlantNum = 20
let week = 0


let currentArea = (currentPlantNum * plantSize);
console.log(`Week ${week} has ${currentPlantNum} plants and has an area of ${currentArea} Sq. meters`)
if (currentArea <= area) {
    currentPlantNum *= 2;
    currentArea = (currentPlantNum * plantSize);
        console.log(`Week ${week += 1} has ${currentPlantNum} plants and has an area of ${currentArea} Sq. meters`)
} else{
    console.log("Week 1: Not enough space for more plants.");
}
if (currentArea <= area) {
    currentPlantNum *= 2;
    currentArea = (currentPlantNum * plantSize);
        console.log(`Week ${week += 1} has ${currentPlantNum} plants and has an area of ${currentArea} Sq. meters`)
} else {
    console.log("Week 2: Not enough space for more plants.");
}
if (currentArea <= area) {
    currentPlantNum *= 2;
    currentArea = (currentPlantNum * plantSize);
        console.log(`Week ${week += 1} has ${currentPlantNum} plants and has an area of ${currentArea} Sq. meters`)
}
else {
    console.log("Week 3: Not enough space for more plants.")
}
if (currentArea <= area) {
    currentPlantNum *= 2;
    currentArea = (currentPlantNum * plantSize);
        console.log(`Week ${week += 1} has ${currentPlantNum} plants and has an area of ${currentArea} Sq. meters`)
}
else {
    console.log("Week 4: Not enough space for more plants.")
}
if (currentArea <= area) {
    currentPlantNum *= 2;
    currentArea = (currentPlantNum * plantSize);
        console.log(`Week ${week += 1} has ${currentPlantNum} plants and has an area of ${currentArea} Sq. meters`)
}
else {
    console.log("Week 5: Not enough space for more plants.")
}
