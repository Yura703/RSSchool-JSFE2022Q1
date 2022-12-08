import { IProduct } from '../../types/IProduct';

function swap(arr: IProduct[], i: number, j: number) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function rearrange(arr: IProduct[], keyProp: string, start: number, end: number) {
    const pivot = arr[end];
    let pointer = start;

    for (let i = start; i < end; i++) {
        if (arr[i][keyProp as keyof IProduct] < pivot[keyProp as keyof IProduct]) {
            swap(arr, pointer, i);

            pointer++;
        }
    }

    swap(arr, pointer, end);
    return pointer;
}

export function quickSort(arr: IProduct[], keyProp: string, start: number, end: number) {
    if (start < end) {
        const pointer = rearrange(arr, keyProp, start, end);

        if (arr.length == 0) return;
        quickSort(arr, keyProp, start, pointer - 1);
        quickSort(arr, keyProp, pointer + 1, end);
    }

    return arr;
}
