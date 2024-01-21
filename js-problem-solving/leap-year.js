
let num = 2000;

if(num % 4 === 0){
    if(num % 100 === 0){
        if(num % 400 === 0){
            console.log("It's Leap Year");
        }else{
            console.log('Leap Year');
        }
    }else{
        console.log('Leap Year');
    }
}else{
    console.log('Not Leap Year');
}

