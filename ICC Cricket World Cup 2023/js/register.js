async function register(){
    fetch("https://api.cup2022.ir/api/v1/user",{
        method: "POST",
        headers:{
            'Content-Type': 'application/json,

        },
        body:JSON.stringify({
            name:'Reza RAhiminia'
            email:
        })
    })
}