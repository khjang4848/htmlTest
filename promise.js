'use struct';

const promise = new Promise((resolve, reject) => {
    console.log('벅희진 만세');
    setTimeout(() => {
        //resolve('박희진 만세2');
        reject(new Error('박희진 3'));
    }, 2000);
});

promise.then(value => console.log(value)).catch(error => console.log(error));
