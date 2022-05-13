const palindrome = (string) => {
    if(typeof string === 'undefined') return ;

    return string
            .split('')
            .reverse()
            .join('');
}

const average = array => {

    if(array === undefined)return;
    if(array === NaN)return;
    
    


    let sum = 0;
    array.forEach(num => { sum += num });
    return sum / array.length;
}

module.exports={
    /* palindrome : palindrome,
    average : average, */
    palindrome,
    average
}