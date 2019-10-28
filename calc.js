 function add(op1,op2) {
     var first =Number(op1)
    var second =  Number(op2)
     return first + second
 }
 
 function sub(op1,op2) {
     var first =Number(op1)
    var second =  Number(op2)
     return first - second
 }
 
 function mul(op1,op2) {
     var first =Number(op1)
    var second =  Number(op2)
     return first * second
 }
 
 function div(op1,op2) {
     var first =Number(op1)
    var second =  Number(op2)
     return first / second
 }
 
 document.getElementById('add').onclick = () => {
    var op1 = document.getElementById('op1').value
    var op2 = document.getElementById('op2').value
     console.log(op1)
    var result  = add(op1,op2)
    console.log(result)
    document.getElementById('r').innerHTML = 'After Addition :'+result
 }

 document.getElementById('mul').onclick = () => {
    var op1 = document.getElementById('op1').value
    var op2 = document.getElementById('op2').value
     console.log(op1)
    var result  = mul(op1,op2)
    console.log(result)
    document.getElementById('r').innerHTML = 'After Subtraction :'+result
 }

 document.getElementById('sub').onclick = () => {
    var op1 = document.getElementById('op1').value
    var op2 = document.getElementById('op2').value
     console.log(op1)
    var result  = sub(op1,op2)
    console.log(result)
    document.getElementById('r').innerHTML = 'After Multiplication :'+result
 }

 document.getElementById('div').onclick = () => {
    var op1 = document.getElementById('op1').value
    var op2 = document.getElementById('op2').value
     console.log(op1)
    var result  = div(op1,op2)
    console.log(result)
    document.getElementById('r').innerHTML = 'After Division :'+result
 }
    
