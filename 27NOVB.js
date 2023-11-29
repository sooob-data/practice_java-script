//write a fuction that implements do-while loop that prints the miltipliction table for given number?

function table(num){
    let i = 1;
    do{
        console.log(`${num} x ${i} = ${num*i}`);
        i++;
    }while(i <= 10);
}
table(10);