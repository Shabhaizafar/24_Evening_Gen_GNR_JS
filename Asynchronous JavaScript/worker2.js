var i = 0;
setInterval(() => {
        self.prompt();
        postMessage(i);
        i++;
}, 1000);
