// api
const API = 'https://randomuser.me/api/?results=9'

// for leader
const overlay = document.getElementById('overlay')


const Overlay = ()=>{
    overlay.classList.toggle('hidden')
}

// Get request
const getRequest = (resours) => {
    return new Promise((resolve, rejects )=>{
        const request = new XMLHttpRequest()

        request.addEventListener('readystatechange', ()=>{
            if(request.readyState < 4){
                Overlay()
            }else if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.response).results
                Overlay()
                resolve(data)
            }else if(request.readyState === 4){
                Overlay()
                rejects("Somthing is error")
            };
        })

        request.open('GET', resours)
        request.send()
    })
}



const reload = ()=>{
    getRequest(API)
        .then((data)=>{
            upDateUl(data);
        })
        .catch((err)=>{
            alert(err);
        })
} 

document.addEventListener('DOMContentLoaded', reload)