
    let url="https://catfact.ninja/fact"

    let p=document.querySelector('p')
    let btn=document.querySelector('button')

    btn.addEventListener('click', async()=>{
        let fact=await getFacts();
        p.innerText=fact;
    })




    async function getFacts(){
        try {
            let res=await axios.get(url);
            return res.data.fact;
        } catch (error) {
            return error;
        }
    }

// http headers

let url2="https://icanhazdadjoke.com"



async function getJoke(){
    try {
        const config= { headers: {Accept: "application/json"}}
        let res2=await axios.get(url2,config);
        console.log (res2.data.joke);
    } catch (error) {
        console.log(error)
    }
}

