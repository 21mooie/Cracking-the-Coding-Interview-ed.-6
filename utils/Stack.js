const Stack = function (data) {
    this.data = [];
    this.push = function(val) {
        this.data.push(val);
    }
    this.pop = function() {
        return this.data.pop();
    }
    this.peek = function() {
        return this.data[this.data.length-1];
    }
    this.isEmpty = function() {
        return this.data.length === 0;
    }
    this.showStack = function() {
        const array = [];
        for (let i=this.data.length-1; i>=0; i--) {
            array.push(this.data[i]);
        }
        return array;
    }
}

module.exports = Stack;