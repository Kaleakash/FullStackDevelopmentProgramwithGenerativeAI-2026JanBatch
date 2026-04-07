class TaskQueue {
  constructor(maxSize) {
    this.queue = [];
    this.maxSize = maxSize;
  }

  addTask(task) {
    if (this.queue.length < this.maxSize) {
      this.queue.push(task);
      console.log("Task added:", task);
    } else {
      console.log("Queue is full");
    }
  }

  processTask() {
    if (this.queue.length === 0) {
      console.log("No tasks");
      return;
    }
    if (this.queue.length > 0) {
      console.log("Processing task...");
      let task = this.queue.shift();
      console.log("Task processed as : ", task);
    }
   
  }
  numberOfTasks() {
    return this.queue.length;
  }
}

// Usage
const queue = new TaskQueue(3);
console.log("Number of tasks:", queue.numberOfTasks());
queue.addTask("Send Email");
queue.addTask("Generate Report");
queue.addTask("Upload File");
queue.addTask("Backup Database"); // This will not be added as the queue is full
console.log("Number of tasks:", queue.numberOfTasks());
queue.processTask();
queue.processTask();
queue.processTask();
queue.processTask();
console.log("Number of tasks:", queue.numberOfTasks());