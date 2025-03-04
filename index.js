

const radius = 5 
const pi = 3.1415
const area = pi * radius * radius
const plantSize = 0.8
let currentPlantNum = 20
let week = 0
const maxArea = area * .8



// // This part predicts the plant growth after a specified number of weeks at 100% capacity


let currentArea = (currentPlantNum * plantSize);
// console.log(`Week ${week} has ${currentPlantNum} plants and has an area of ${currentArea} Sq. meters`)


// if (currentArea + (currentPlantNum * plantSize) <= area) {
//     currentPlantNum *= 2;
//     currentArea = (currentPlantNum * plantSize);
//         console.log(`Week ${week += 1} has ${currentPlantNum} plants and has an area of ${currentArea} Sq. meters`)
// } else{
//     console.log(`Week ${week}: Not enough space for more plants.`);
// }
// if (currentArea + (currentPlantNum * plantSize) <= area) {
//     currentPlantNum *= 2;
//     currentArea = (currentPlantNum * plantSize);
//         console.log(`Week ${week += 1} has ${currentPlantNum} plants and has an area of ${currentArea} Sq. meters`)
// } else {
//     console.log(`Week ${week += 1}: Not enough space for more plants.`);
// }
// if (currentArea + (currentPlantNum * plantSize) <= area) {
//     currentPlantNum *= 2;
//     currentArea = (currentPlantNum * plantSize);
//         console.log(`Week ${week += 1} has ${currentPlantNum} plants and has an area of ${currentArea} Sq. meters`)
// }
// else {
//     console.log(`Week ${week += 1}: Not enough space for more plants.`)
// }

// Pruned Part. This part sees if the plants shoudl be pruned if the plant count exceeds 80% of the max capacity


// 62.830000001 this is 80% max number


console.log(`Week ${week} has ${currentPlantNum} plants and has an area of ${currentArea} Sq. meters`)


if (currentArea + (currentPlantNum * plantSize) <= maxArea) {
    currentPlantNum *= 2;
    currentArea = (currentPlantNum * plantSize);
        console.log(`Week ${week += 1} has ${currentPlantNum} plants and has an area of ${currentArea} Sq. meters and shouldn't be pruned`)
    } 
    else{
    console.log(`Week ${week += 1}: The plants have reached 80% capacity and should be pruned.`);
}
if (currentArea + (currentPlantNum * plantSize) <= maxArea) {
    currentPlantNum *= 2;
    currentArea = (currentPlantNum * plantSize);
        console.log(`Week ${week += 1} has ${currentPlantNum} plants and has an area of ${currentArea} Sq. meters and shouldnt be pruned`)
} else {
    console.log(`Week ${week += 1}: The plants have reached 80% capacity and should be pruned.`);
}
if (currentArea + (currentPlantNum * plantSize) <= maxArea) {
    currentPlantNum *= 2;
    currentArea = (currentPlantNum * plantSize);
        console.log(`Week ${week += 1} has ${currentPlantNum} plants and has an area of ${currentArea} Sq. meters`)
}
else {
    console.log(`Week ${week += 1}: The plants have reached 80% capacity and should be pruned.`)
}

