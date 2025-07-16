async function Delay(time){
    return await setTimeout(() => {
        return new Promise((success,reject)=>{
            success();
        })
    }, time);
}

Delay(2000).then(()=>{console.log("wertyu")});
