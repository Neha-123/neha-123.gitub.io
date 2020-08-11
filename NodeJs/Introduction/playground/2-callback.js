const add = (num1, num2, callback) => {
    setTimeout(()=>{
        const data = num1 + num2;
        callback(data);
    }, 2000)
}

add(2, 3, (data) => {
    console.log(data);
})