// program antrian pakai setTimeout dan Promise
// John setelah 1500 ms
// Ed setelah 2000 ms
// Jane setelah 500 ms
// then.catch

let i = 0

const customer = [
    {name: "John", time: 1500},
    {name: "Ed", time: 2000},
    {name: "Jane", time: 500}]
    
const antrian = new Promise((resolve, reject) => {
    if (i >= customer.length) reject("Maaf toko sudah tutup.")
    setTimeout(() => {
        resolve(customer[i].name)
    }, customer[i].time)
})

antrian
.then((result) => {
    console.log(result)
    i += 1})
.catch((err) => {
    console.log(err)})

console.log(antrian)