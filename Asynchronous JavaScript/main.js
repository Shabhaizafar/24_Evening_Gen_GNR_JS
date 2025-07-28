 let worker;

    function startWorker() {
        worker = new Worker("worker.js");

        worker.postMessage(10); // Send data to worker

        worker.onmessage = function (e) {
          document.getElementById("output").innerText = "Result: " + e.data;
        }
    }