function repeatHello(callback){
    const id = setInterval(callback,1000);
    setTimeout(()=>{
        clearInterval(id)
    },5200)
    
}



repeatHello(()=>{console.log("Hello")})
