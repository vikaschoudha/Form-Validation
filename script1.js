let pwd = document.getElementById('pwd')
let upper = document.getElementById('upper')
let lower = document.getElementById('lower')
let symbol = document.getElementById('symbol')
let number = document.getElementById('number')

function password(){
    if(pwd.value.match(/[A-Z]/)){
        upper.style.color = 'green'
    }
    else{
        upper.style.color = 'red'
    }
    if(pwd.value.match(/[a-z]/)){
        lower.style.color = 'green'
    }
    else{
        lower.style.color = 'red'
    }
    if(pwd.value.match(/[\@\$]/)){
        symbol.style.color = 'green'
    }
    else{
        symbol.style.color = 'red'
    }
    if(pwd.value.match(/[0-9]/)){
        number.style.color = 'green'
    }
    else{
        number.style.color = 'red'
    }
}


let data = [
    {
      title : password must contain atleast one number
      Discripition : 'Discripition'

    },{
        title : 'Data 2'
        Discripition : 'Discripition'
    }
]

let store = document.getElementById('store')
let newarr = data.map((datas)=>{
    return `<h1>${datas.title}</h1>
    <h2>${datas.Discripition}</h2>`
})
store.innerHTML += newarr

document.getElementById('upper').innerHTML +=hello


let str = vikas choudhay

// function password(){
//     // console.log('hello')
// }


