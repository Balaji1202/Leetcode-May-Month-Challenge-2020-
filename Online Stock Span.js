class StockSpanner {
    constructor() {
        this.stocks = [];
    }
    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        let lastEl = this.stocks[this.stocks.length - 1];
        let lastSpan = 0, lastPrice = -Infinity, curSpan = 1;
        if (lastEl) {
            lastSpan = lastEl.span;
            lastPrice = lastEl.price;
        }
        if (price >= lastPrice) {
            curSpan += lastSpan;
        }
        this.stocks.push({ price: price, span: curSpan });
        return curSpan;
    }
}
