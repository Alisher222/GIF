// Promise================
// const p = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log('preaparing data ...')
//         const backenData = {
//             server : 'FFFF',
//             port : 2000,
//             status : '500 - server is not working'
//         }
//         // resolve(backenData)
//         reject(backenData)
//     },2000)
// })

// p
// .then((data)=>console.log('OK',data))
// .catch((err)=>{
//     console.log('ERROR',err)
// })
// .finally((data)=>console.log('Final answer'))

// HTTP методы========
// CRUD operations======== CREATE READ UPDATE DELETE
// GET(запрос для получения информации из бекенда)
// POST(запрос для отправления информации в бекенд)
// PUT PATCH(редактирование данных)
// DELETE(удаление данных)

// HTTP status=============================Hyper text transtmition protocol
// 200 -OK - correct
// 300 - перенаправление
// 400 - ошибка во фронтенде - неправильный запрос
// 500 - ошибка сервиса

// ============ASYNC======AWAIT=======FETCH========
// const search = async()=>{
//     let url = 'http://youtube.com'
//     let reguest = await fetch(url)
//     let response = await reguest.json()
//     console.log(response)
// }
// =====================================
const API = 'https://api.giphy.com/v1/gifs/search?api_key='
const KEY = 'sTdCJjIAUz2fNDMUob8nqHx6G50HnUzP'
const secondStr = '&limit=25&q='

let input, btn, output
input = document.getElementById('input')
btn = document.getElementById('btn')
output = document.getElementById('output')

const searchGiphy = async()=>{
    let text = input.value
    let url = API+KEY+secondStr+text
    let reguest = await fetch(url)
    let response = await reguest.json()
    input.value =''
    console.log(response.data)
    renderGiphy(response.data)
}

const renderGiphy = (data)=>{
    output.innerHTML =''
    data.forEach(el=>{
        let div = document.createElement('div')
        let iframe = document.createElement('iframe')
        let h5 = document.createElement('h5')
        h5.innerHTML = el.title
        iframe.src = el.embed_url
        div.append(h5,iframe)
        output.append(div)
    })
}

btn.addEventListener('click',()=>{
    searchGiphy()
})