

function fibonacci(n) {
    let num1 = 1;
    let num2 = 1;
    let res = 0;
    
    for (let i = 0; i < n; i++) {
        res= num1+num2
        num1=num2
        num2=res
        console.log(res)
        
    }
}

fibonacci(6)







