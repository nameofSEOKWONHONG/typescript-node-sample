export function* rangeGenerator(from:number, to:number):IterableIterator<number> {
    for (let i = from; i <= to; i++) {
        yield i;
    }
}