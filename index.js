// program antrian pakai setTimeout dan Promise
// John setelah 1500 ms
// Ed setelah 2000 ms
// Jane setelah 500 ms
// then.catch

function antrian(name, time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name)
        }, time);
    })
}

const customer = [
    {name: "John", time: 1500},
    {name: "Ed", time: 2000},
    {name: "Jane", time: 500}
]

console.time()

antrian(customer[0].name, customer[0].time)
.then((success) => {
    console.log(success)
    antrian(customer[1].name, customer[1].time)
    .then((success) => {
        console.log(success)
        antrian(customer[2].name, customer[2].time)
        .then((success) => {
            console.log(success)
            console.timeEnd()})
    })
})