// ### 🔄 **Synchronous (Sync)**

// #### 🔹 Definition:

// Code runs **line by line**, waiting for each line to finish **before** moving to the next.

// #### 🔹 Behavior:

// * **Blocking**: One task must complete before the next starts.
// * Slower if a task takes time (e.g., file read, API call).

// #### 🔹 Example (JavaScript):


// console.log("Start");
// let result = doSomething(); // waits until done
// console.log("End");



// ### ⚡ **Asynchronous (Async)**

// #### 🔹 Definition:

// Code runs **independently**, and tasks can be **paused or delayed** without blocking others.

// #### 🔹 Behavior:

// * **Non-blocking**: Tasks like network requests happen in the background.
// * Improves performance, especially in I/O-heavy apps.

// #### 🔹 Example (JavaScript):


console.log("Start");
setTimeout(() => {
  doSomthing();
}, 2000);
console.log("End");

// **Output:**

// Start
// End
// Async Task



// ### ✅ Key Differences:

// | Feature        | Synchronous           | Asynchronous               |
// | -------------- | --------------------- | -------------------------- |
// | Execution Flow | Line by line          | Can skip & return later    |
// | Speed          | Slower for long tasks | Faster for I/O operations  |
// | Blocking       | Yes                   | No                         |
// | Use Case       | Simple tasks          | API calls, File read/write |

