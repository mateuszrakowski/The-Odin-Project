function camelize(str) {
    let stringsArray = str.split("-");
    let firstPart = stringsArray.splice(0, 1);
    let camelCaseArray = stringsArray.map((text) => text.charAt(0).toUpperCase() + text.slice(1));
    return firstPart.concat(camelCaseArray).join("");
}

function filterRange(arr, a, b) {
    return arr.filter((num) => (num >= a && num <= b));
}

function filterRangeInPlace(arr, a, b) {
    let indexesToDelete = arr.reduce((accumulator, num, index) => 
    {
        if (num >= a && num <= b) {
            accumulator.push(index);
        }
        return accumulator;
    }, []);

    return arr.splice(0, indexesToDelete);
};

function decreasingArray(arr) {
    return arr.sort((a, b) => b - a);
}

function copySorted(arr) {
    return arr.toSorted()
}

function shuffle(arr) {
    let newArray = [];
    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        newArray.push(arr[randomIndex]);
        arr.splice(randomIndex, 1);
    }

    return newArray;
}

function unique(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}
