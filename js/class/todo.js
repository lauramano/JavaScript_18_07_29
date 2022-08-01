'use strict';
// savybe pridedama prie klases o ne prie klases objektu
export default class Todo{
    static todoCount = 0;

    constructor(newTitle) {
        this.id = `t_${++Todo.todoCount}`;
        this.title = newTitle;
        this.complete = false;
        this.timeStamp = new Date().toLocaleTimeString();
    }

    markDone(){
        this.complete = true;
    }

    // toggleComplete() {
    //     this.complete = !this.complete;
    //     this.timeStamp = new Date().toLocaleTimeString();
    // }
}