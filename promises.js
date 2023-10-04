const promiseOne = new Promise((resolve,reject)=>{
setTimeout(function(){
    let error= false;
    if(!error){
        resolve({name:"javascript", email:"js@example.com"})
    }
    else{
        reject("ERROR: Something went wrong")
    }
},1000)
    
})
// promiseOne
// .then(function(e){
//     return e.name
// }).then((e)=>{
//     console.log(e)
// })
// .catch(function(e){
//     console.log(e)
// })


async function consumePromiseOne(){
    try {
        const response = await promiseOne
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseOne()
