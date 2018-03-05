export class Cart {
    private sum = 0;
    incr() {
        this.sum++
    }
    getSum():number {
        return this.sum;
    }
}