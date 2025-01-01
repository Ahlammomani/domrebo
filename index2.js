
const array = [10, 20, 30, 40, 50 , 60 ,70,80];

function findIndex(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }
    }
    return -1;
}

const userInputNumber = Number(prompt(`Enter a number: [${array}]`));

const result = findIndex(array, userInputNumber);

if (result !== -1) {
    alert(`The number ${userInputNumber} is found at index ${result}.`);
} else {
    alert(`The number ${userInputNumber} is not found in the array${result}.`);
}
