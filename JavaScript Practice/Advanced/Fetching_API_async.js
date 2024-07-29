let url="https://catfact.ninja/fact"


async function getFacts(){

    try {
        let res=await fetch(url)
        let data1=await res.json();
        console.log(data1.fact)

        let res2= await fetch(url)
        let data2 = await res2.json()
        console.log(data2.fact)
    } catch (error) {
        console.log(error)
    }
}


getFacts();