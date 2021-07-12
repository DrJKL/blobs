export function partition<T>(arr: T[], predicate: (i: T) => boolean): [T[], T[]] {
    const pass: T[] = [];
    const fail: T[] = [];
    arr.forEach((value) => {
        if (predicate(value)) {
            pass.push(value);
        } else {
            fail.push(value);
        }
    });
    return [pass, fail];
}