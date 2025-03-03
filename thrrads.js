
process.env.UV_THREADPOOL_SIZE = 5;

const crypto = require('crypto');

const start = Date.now();

crypto.pbkdf2("a","b",100000,512,'sha512',()=>{
    console.log('Time taken (1):', Date.now() - start);
})

crypto.pbkdf2("a","b",100000,512,'sha512',()=>{
    console.log('Time taken (2):', Date.now() - start);
})

crypto.pbkdf2("a","b",100000,512,'sha512',()=>{
    console.log('Time taken (3):', Date.now() - start);
})

crypto.pbkdf2("a","b",100000,512,'sha512',()=>{
    console.log('Time taken (4):', Date.now() - start);
})

crypto.pbkdf2("a","b",100000,512,'sha512',()=>{
    console.log('Time taken (5):', Date.now() - start);
})