import { cars } from '../../db/Products';
import { IProduct } from '../../types/IProduct';

function swap(arr: number[], i: number, j: number) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function rearrange(arr: number[], start: number, end: number) {
    const pivot = arr[end];
    let pointer = start;

    for (let i = start; i < end; i++) {
        if (arr[i] < pivot) {
            swap(arr, pointer, i);

            pointer++;
        }
    }

    swap(arr, pointer, end);
    return pointer;
}

function quickSort(arr: number[], start: number, end: number) {
    const pointer = rearrange(arr, start, end);

    quickSort(arr, start, pointer - 1);
    quickSort(arr, pointer + 1, end);
}

const arr = [3, 7, 2, 6, 5];
quickSort(arr, 0, arr.length - 1);
console.log(arr); // 2, 3, 5, 6, 7
