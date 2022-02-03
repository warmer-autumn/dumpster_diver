import fetch from 'node-fetch'
const owo = require('@zuzak/owo')


function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}


fetch('https://api.reddit.com/r/196').then(async response => {
    const data = await response.json()
    // console.log(JSON.stringify(data, null, 2))
    // console.log(JSON.stringify(data.data.children))
    
    // this will fail because for..in syntax only works with object properties and children is an array
    // for(let post in data.data.children){
        //     // console.log(post.data.title)
        //     console.log(post)
        // }
        
    const posts = data.data.children.filter(post => post.data.post_hint === "image")
    const rando = randomInteger(0, posts.length -1)

    // this works
    // posts.forEach(post => {
    //     console.log(post.data.title)
    // })

    // but also this!
    // for (const { data: post } of posts){ // this line used destructuring syntax to access an interior property of the object making post data the constant instead of needing to write post.data.tile later
    //     console.log(post.title + ' => ' + owo.translate(post.title), post.url)
    // }
    const post = posts[rando].data
    console.log(owo(post.title), post.url)
})

//url = image url
//post_hint



//const message = 'hello world '
//let message2 = 'Im suffering'
//message2 = 'im gay'

//console.log(owo.translate(message+message2))
