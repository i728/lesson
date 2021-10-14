const students = [17,38,100,95,23,62,77,45,69,81,83,51,42,36,60]
let point = [0,0,0,0,0,0,0,0,0,0,0]
students.forEach(function(element){
    num = Math.floor(element/10);
    point[num] += 1;
})
let maxPoint = Math.max.apply(null, point)

for(let i=maxPoint; i>=1; i--){
    point.forEach(function(element){
        if(element >= i){
            process.stdout.write('*');
        }else if(element == 0){
            process.stdout.write('')
        }else{
            process.stdout.write(' ');
        }
        process.stdout.write('  ');
    })
    process.stdout.write('\n');
}
console.log('----------------------------------');
console.log('0 10 20 30 40 50 60 70 80 90 100');