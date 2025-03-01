

const radius = 5 
const pi = 3.1415
const area = pi * radius * radius
const plantSize = 0.8
let currentPlantNum = 20


let currentArea = (currentPlantNum * plantSize);
console.log("Starting Week plants of " + [currentPlantNum] + " has an area of " + (currentPlantNum * plantSize) + " Sq. meters")
if (currentArea <= area) {
    currentPlantNum *= 2;
    currentArea = (currentPlantNum * plantSize);
        console.log("Week 1 has " + [currentPlantNum] + " plants and has an area of " + (currentPlantNum * plantSize) + " Sq. meters")
} else{
    console.log("Week 1: Not enough space for more plants.");
}
if (currentArea <= area) {
    currentPlantNum *= 2;
    currentArea = (currentPlantNum * plantSize);
        console.log("Week 2 has " + [currentPlantNum] + " plants and has an area of " + (currentPlantNum * plantSize) + " Sq. meters")
} else {
    console.log("Week 2: Not enough space for more plants.");
}
if (currentArea <= area) {
    currentPlantNum *= 2;
    currentArea = (currentPlantNum * plantSize);
        console.log("Week 3 has " + [currentPlantNum] + " plants and has an area of " + (currentPlantNum * plantSize) + " Sq. meters")
}
else {
    console.log("Week 3: Not enough space for more plants.")
}
if (currentArea <= area) {
    currentPlantNum *= 2;
    currentArea = (currentPlantNum * plantSize);
        console.log("Week 4 has " + [currentPlantNum] + " plants and has an area of " + (currentPlantNum * plantSize) + " Sq. meters")
}
else {
    console.log("Week 4: Not enough space for more plants.")
}
if (currentArea <= area) {
    currentPlantNum *= 2;
    currentArea = (currentPlantNum * plantSize);
        console.log("Week 5 has " + [currentPlantNum] + " plants and has an area of " + (currentPlantNum * plantSize) + " Sq. meters")
}
else {
    console.log("Week 5: Not enough space for more plants.")
}
