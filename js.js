const fetchAdvice = async() =>{
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()

    console.log(data)
    document.getElementById("title").innerHTML = data.slip.id
    document.getElementById("para").innerHTML = data.slip.advice 
}
fetchAdvice()