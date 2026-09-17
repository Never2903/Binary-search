const arr1 = [1, 3, 5, 7, 10, 35, 79, 85];
const arr2 = [75, 46, 28, 7, 4, 1]
const arr3 = [];


function binarySearch(arr, target) {
    if (arr.length === 0) {
        return 'Пустой массив'
    }
    let left = 0;
    let right = arr.length - 1;
    //let arr2 = arr.sort((a,b) => a-b);
    let isAscending = arr[left] < arr[right];

    while (left <= right) {
        let mid = left + Math.floor((right-left) / 2);

        if (arr[mid] === target) {
            return mid
        }
        
        if (isAscending){
            if (arr[mid] < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        } else {
            if (arr[mid] < target) {
                right = mid -1
            } else {
                left = mid + 1
            }
        }
    }

    arr.splice(left, 0, target);
    return `Элемент не найден. Позиция для вставки - ${left}`;
}

console.log(binarySearch(arr1, 10), 
binarySearch(arr2, 7), 
binarySearch(arr2, 0),
binarySearch(arr3, 0)
)



//2 задача

const arrGor = [1,3,2,5,5,5,7,6]

function findPeaks(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left+right) / 2);

        if (arr[mid] < arr[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return `Значение пика -  ${arr[left]}`; 
}

console.log(findPeaks(arrGor))

function findPeaksAll(arr) {
    const peaks = [];
    for (let i = 1; i < arr.length - 1; i++) {
        const isGreaterLeft = (i===0) || arr[i] > arr[i - 1];

        const isGreaterRight = (i===arr.length-1) || arr[i] > arr[i + 1];

        if (isGreaterLeft && isGreaterRight) {
            peaks.push(arr[i]);
        }
    }

    return peaks;
}

console.log(findPeaksAll(arrGor))

//3 задача

const arr = [-10,-5,-4,-1,0,10,20,30,45,75,85,95]

function gimmeMore(arr) {
    let left = 0;
    let right = arr.length - 1;
    let firstPositive = arr.length;

    while (left<=right) {
        let mid = left + Math.floor((right-left) / 2);

        if (arr[mid] >= 0) {
            firstNonNegative = mid;
            right = mid - 1;
        } else {
            left = mid +1;
        }
    }

    left = 0;
    right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] > 0) {
            firstPositive = mid; // Запоминаем кандидата
            right = mid - 1;     // Но продолжаем искать еще левее
        } else {
            left = mid + 1;
        }
    }

    numberOfPositives = arr.length - firstPositive;
    numberOfNegatives = arr.length - 1 - numberOfPositives;
    numberOfNonNegatives = arr.length - numberOfPositives - numberOfNegatives;

    //return `${numberOfPositives}, ${numberOfNonNegatives}, ${numberOfNegatives}`;

    if (arr.lenght === 0) {
        return 'Пустой массив';
    } else if (numberOfPositives === numberOfNegatives) {
        return 'Количество положительных и отрицательных чисел одинаковое';
    } else if (numberOfPositives > numberOfNegatives) {
        return `Положительных - ${numberOfPositives}`;
    } else {
        return `Отрицательных - ${numberOfNegatives}`;
    }
}

console.log(gimmeMore(arr));


//4 задача

const nums = [5,2,6,1]

function findLessRight(arr) {
    let output = []

    for (let i =0; i<arr.length; i++) {
        fixedNm = arr[i];
        let left = i + 1;
        let right = arr.length - 1;
        let count = 0;
        for (let j = left; j <= right; j++) {
            if (arr[j] < fixedNm) {
                count++;
            }
        }
        output.push(count);
    }
    return output;
}

console.log(findLessRight(nums))