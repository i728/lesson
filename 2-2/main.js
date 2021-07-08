let r = process.argv[2];
if(isNaN(r)){
    console.log('Eloor:Arguments');
}else{
    console.log(r*r*3.14);
}