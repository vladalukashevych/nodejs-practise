// const add = (a,b) =>{
//     return a+b;
// }
//
// const digitsInNumber = (num)=>{
//     return num.toString().replaceAll("-","").length;
// }

function factorial(num)
{
    if (num < 0)
        return null;
    if (num === 0)
        return 1;
    else
        return num * factorial( num - 1 );
}

module.exports = {factorial}