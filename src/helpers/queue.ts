export default class Queue<T> {
    data: { [key: number]: T; } = {};
    head = 0;
    tail = 0;

    enqueue(item: T) {
        this.data[this.tail] = item;
        this.tail++;
    }

    dequeue(): T {
        if (this.isEmpty()) {
            throw Error('Nothing in Queue');
        }
        const item = this.data[this.head];
        delete this.data[this.head];
        this.head++;
        if (this.isEmpty()) {
            this.head = 0;
            this.tail = 0;
        }
        return item;
    }

    peek() {
        return this.data[this.head];
    }

    size() {
        console.log({ size: this.tail - this.head });
        return this.tail - this.head;
    }

    isEmpty() {
        return this.tail === this.head;
    }

    entries() {
        return Object.values(this.data);
    }

}
