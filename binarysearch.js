const arr1 = [1, 3, 5, 7, 10, 35, 79, 85];
const arr2 = [75, 46, 28, 7, 4, 1]
const arr3 = [];


function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    if (arr.length === 0) {
        return 'Пустой массив'
    }

    let isAscending = arr[left] < arr[right]; //проверяем, отсортирован ли массив по возрастанию или убыванию

    while (left <= right) {
        let mid = left + Math.floor((right-left) / 2);

        if (arr[mid] === target) { //если элемент сразу найден, возвращаем его индекс
            return mid
        }
        
        if (isAscending){
            if (arr[mid] < target) { //если массив отсортирован по возрастанию, то ищем в правой половине
                left = mid + 1
            } else {
                right = mid - 1
            }
        } else {
            if (arr[mid] < target) { //если массив отсортирован по убыванию, то ищем в левой половине
                right = mid -1
            } else {
                left = mid + 1
            }
        }
    }

    const arr2 = [...arr]; //копируем массив, чтобы не изменять исходный

    arr2.splice(left, 0, target); //вставляем элемент в массив на позицию left
    return `Элемент не найден. Позиция для вставки - ${left}`;
}

console.log(binarySearch(arr1, 10), 
binarySearch(arr2, 7), 
binarySearch(arr2, 0),
binarySearch(arr3, 0)
)



//2 задача

const arrGor = [1,3,2,5,5,5,7,6,4,4,9,8,5]

function findPeaks(arr) { //функция для поиска пика в массиве с помощью бинарного поиска
    let left = 0;
    let right = arr.length - 1;

    if (arr.length === 0) {
        return 'Пустой массив'
    }

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

function findPeaksAll(arr) { //функция для поиска всех пиков в массиве
    const peaks = [];

    if (arr.length === 0) {
        return 'Пустой массив'
    }

    for (let i = 1; i < arr.length - 1; i++) {
        const isGreaterLeft = (i===0) || arr[i] > arr[i - 1];

        const isGreaterRight = (i===arr.length-1) || arr[i] > arr[i + 1];

        if (isGreaterLeft && isGreaterRight) {
            peaks.push(arr[i]);
        }
    }

    return `Значения пиков - ${peaks}`;
}

console.log(findPeaksAll(arrGor))

//3 задача

const arr = [-10,-5,-4,-1,0,10,20,30,45,75,85,95]

function gimmeMore(arr) { //функция для подсчета количества положительных, отрицательных и нулевых чисел в массиве
    
    let left = 0;
    let right = arr.length - 1;
    let firstPositive = arr.length;

    if (arr.length === 0) { //проверка на пустой массив
        return 'Пустой массив'
    }

    while (left<=right) { //проделываем бинарный поиск для нахождения первого неотрицательного числа в левой части массива
        let mid = left + Math.floor((right-left) / 2);

        if (arr[mid] >= 0) { //если элемент >=0, то запоминаем его индекс и продолжаем искать в левой части массива
            firstNonNegative = mid;
            right = mid - 1;
        } else {
            left = mid +1;
        }
    }

    left = 0; //проделываем бинарный поиск для нахождения первого положительного числа в правой части массива
    right = arr.length - 1;
    while (left <= right) { 
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] > 0) {
            firstPositive = mid; // Запоминаем кандидата
            right = mid - 1;     // При этом продолжаем искать еще левее
        } else {
            left = mid + 1;
        }
    }

    numberOfPositives = arr.length - firstPositive; //количество положительных чисел в массиве
    numberOfNegatives = arr.length - 1 - numberOfPositives; //количество отрицательных чисел в массиве
    numberOfNonNegatives = arr.length - numberOfPositives - numberOfNegatives; //количество нулевых чисел в массиве

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
    let output = [] //создаем массив для хранения количества элементов

    if (arr.length === 0) {
        return 'Пустой массив'
    }

    for (let i =0; i<arr.length; i++) { //проходимся по каждому элементу массива
        fixedNm = arr[i]; //фиксируем текущий элемент
        let left = i + 1; //устанавливаем левую границу поиска на следующий элемент после текущего
        let right = arr.length - 1; 
        let count = 0;
        for (let j = left; j <= right; j++) { //проходимся по всем элементам справа от текущего
            if (arr[j] < fixedNm) { //проверяем если элемент меньше текущего и увеличиваем счетчик
                count++;
            }
        }
        output.push(count); //добавляем количество элементов в массив для фиксированного числа
    }
    return output;
}

console.log(findLessRight(nums))