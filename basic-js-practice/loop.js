let i = 1;

while (i <= 10){
    if(i === 5){
        i++;
        continue;
    }
    console.log(i);
    i++;
}

// --------------------------------------

for (let i = 1; i <= 10; i++){
    if (i === 5){
        continue;
    }
    console.log(i);
}
0