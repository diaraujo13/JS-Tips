// let s = 'xyxyx';
// let n = s.length;

// function verify(s){
//     let i = 0;
//     let status = true;
    
//     for (;i<n;i++, i>0 && s[i]==s[i-1] && (status=false));
//     return status;
// }

// console.log(verify(s));

// console.log('EXERCISE 2');

// var a = [1,2,3], b = [2,3,4];
// var i = 0, j = 0, iPt = 0, jPt = 0;
// for (;i<3, j<3; a[i]>b[j] && iPt++, a[i]<b[j] && jPt++, i++, j++);
// console.log(iPt, jPt);

let arr = '1 2 3 4 5'.split(' ').map( el => parseInt(el));
let i = 0,

    len = arr.length,
    sums = [];

    for (; i<len; i++){
        let local_sum = 0;
        let j = 0;
        
        for (; j<len; j++){
            if (i == j)  continue
            local_sum += arr[j]
        }
        sums.push(local_sum);
    }

    console.log('1 2 3 4 5'.split(' ').map(Math.pow))
    console.log( Math.min(...sums) +' '+ Math.max(...sums));
