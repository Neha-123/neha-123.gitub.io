function one () {
    console.log("one")
}

function two () {
    console.log("two")
}

function three (func) {
    console.log("three")
    setTimeout(() => {
        func()
    }, 0)
    
}


three(two);
one();


