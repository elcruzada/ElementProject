const imagesAndTextFunction = (list, firstAppended, secondAppended, folder, imageVal, classNameVal) => {
    for (let j = 0; j < list.length; j++) {
        let name = list[j][0]
        let image = list[j][1]

        firstAppended.append(image)
        image.className = imageVal
        image.src = `/imagesFolder/${folder}/${name}.jpg`

        const newText = document.createElement('a')
        newText.textContent = list[j][0]
        secondAppended.append(newText)
        newText.className = classNameVal
        newText.style.color = "gray"
        newText.style.fontSize = "25px"
    }
}


const page = () => {
    const image1 = document.createElement('img')
    document.body.append(image1)
    image1.className = "topImage"
    image1.src = '/imagesFolder/mePNG.jpg'

    const title = document.createElement('h1')
    title.classList.add('title')
    title.textContent = "Efren Cruzada"
    // title.style.color = "gray"
    title.style.fontSize = "50px"
    title.style.fontStyle = "bold"
    title.style.textAlign = "center"
    document.body.append(title)


    // const list = document.createElement('ul')
    // document.body.append(list)
    const topDiv = document.createElement('div')
    document.body.append(topDiv)
    topDiv.className = "topDiv"




    const hobbies = ["Poetry", "Video games", "Films", "Music", "Travel"]

    for (let i = 0; i < hobbies.length; i++){

        const singleListItem = document.createElement('button')
        singleListItem.innerText = hobbies[i]
        topDiv.append(singleListItem)
        singleListItem.classList.add(`hobbies${i}`)
        singleListItem.style.color = "gray"
        singleListItem.style.fontSize = "30px"
        singleListItem.style.fontWeight = "bold"
    }


    // const travelList = ["Barranquilla, Colombia", "Santiago, Chile", "Bangkok, Thailand", "Taipei, Taiwan"]


    const header2 = document.createElement('h2')
    header2.className = 'header'
    header2.textContent = "some of my favorite poets"
    document.body.append(header2)

    const aboveSecond = document.createElement('div')
    document.body.append(aboveSecond)
    aboveSecond.className = "imageText"


    const secondDiv = document.createElement('div')
    document.body.append(secondDiv)
    secondDiv.className = "imageDiv"

    const baudelaire = document.createElement('img')
    const dickinson = document.createElement('img')
    const rimbaud = document.createElement('img')
    const sappho = document.createElement('img')

    const poetryList = [
        ["Baudelaire", baudelaire],
        ["Dickinson", dickinson],
        ["Rimbaud", rimbaud],
        // ["Sappho", sappho],
        ["Sappho", sappho]
    ]

    //  images/text list array div for text                                   image.className     newText.className
//testing      poetrylist,     secondDiv,  aboveSecond    "Books"   "authorImages"      "poetName"
imagesAndTextFunction(poetryList, secondDiv, aboveSecond, "Books", "authorImages", "poetName")

    const header3 = document.createElement('h3')
    header3.className = 'header'
    header3.textContent = "my own book"
    document.body.append(header3)

    const grandFlood = document.createElement('img')
    document.body.append(grandFlood)
    grandFlood.className = "grandFlood"
    grandFlood.src = "imagesFolder/Books/grandFlood.jpg"
    grandFlood.style.width = "250px"
    grandFlood.style.height = "auto"


    const header4 = document.createElement('h4')
    header4.className = 'header'
    header4.textContent = "some of my favorite games"
    document.body.append(header4)

    const skyrim = document.createElement('img')
    const eldenRing = document.createElement('img')
    const cyberpunk = document.createElement('img')
    const league = document.createElement('img')

    const textDiv2 = document.createElement('div')
    document.body.append(textDiv2)
    textDiv2.className = "imageText"

    const thirdDiv = document.createElement('div')
    document.body.append(thirdDiv)
    thirdDiv.className = "thirdDiv"

    const videoGamesList = [
        ["Skyrim", skyrim],
        ["Elden Ring", eldenRing],
        ["Cyberpunk 2077", cyberpunk],
        // ["League of Legends", league]
    ]

imagesAndTextFunction(videoGamesList, thirdDiv, textDiv2, "Games", "gamesImages", "gameName")


    const header5 = document.createElement('h5')
    header5.className = 'header'
    header5.textContent = "some of my favorite films"
    document.body.append(header5)

    const inTheMoodForLove = document.createElement('img')
    const ran = document.createElement('img')
    const bladeRunner = document.createElement('img')
    const ghostInTheShell = document.createElement('img')

    const textDiv3 = document.createElement('div')
    document.body.append(textDiv3)
    textDiv3.className = "imageText"

    const fourthDiv = document.createElement('div')
    document.body.append(fourthDiv)
    fourthDiv.className = "fourthDiv"

const moviesList = [
    ["In the Mood for Love", inTheMoodForLove],
    ["Ran", ran],
    ["Blade Runner", bladeRunner],
    ["Ghost in the Shell", ghostInTheShell],
]

imagesAndTextFunction(moviesList, fourthDiv, textDiv3, "Movies", "moviesImages", "filmName")


    const header6 = document.createElement('h6')
    header6.className = 'header'
    header6.textContent = "me likey music"
    document.body.append(header6)

    const karaoke = document.createElement('img')
    const bassoon = document.createElement('img')
    const kpop = document.createElement('img')
    const classical = document.createElement('img')

    const textDiv4 = document.createElement('div')
    document.body.append(textDiv4)
    textDiv4.className = "imageText"

    const fifthDiv = document.createElement('div')
    document.body.append(fifthDiv)
    fifthDiv.className = "fifthDiv"

    const musicList = [
        ["Karaoke", karaoke],
        // ["Bassoon", bassoon],
        ["K-pop", kpop],
        ["Classical", classical],
    ]

imagesAndTextFunction(musicList, fifthDiv, textDiv4, "Music", "musicImages", "musicName")


const p1 = document.createElement('p')
p1.className = 'p1'
p1.textContent = "I traveled abroad for many years as a freelance writer and ESL teacher"
document.body.append(p1)

const p2 = document.createElement('p')
p2.className = 'p2'
p2.textContent = "living in Colombia, Chile, Bangkok, and Taiwan"
document.body.append(p2)


const fabulousAlpaca = document.createElement('img')
const alpacaPineapple = document.createElement('img')
const barranquilla = document.createElement('img')
const glaciers = document.createElement('img')
const japanLights = document.createElement('img')
const watRongKun = document.createElement('img')

const sixthDiv = document.createElement('div')
document.body.append(sixthDiv)
sixthDiv.className = "sixthDiv"

sixthDiv.append(barranquilla)
barranquilla.src = '/imagesFolder/Travel/barranquilla.jpg'
sixthDiv.append(glaciers)
glaciers.src = '/imagesFolder/Travel/glaciers.jpg'

const seventhDiv = document.createElement('div')
document.body.append(seventhDiv)
seventhDiv.className = "seventhDiv"

seventhDiv.append(watRongKun)
watRongKun.src = '/imagesFolder/Travel/watrongkun.jpg'
seventhDiv.append(japanLights)
japanLights.src = '/imagesFolder/Travel/japanLights.jpg'

const eigthDiv = document.createElement('div')
document.body.append(eigthDiv)
eigthDiv.className = "eigthDiv"

eigthDiv.append(alpacaPineapple)
alpacaPineapple.src = '/imagesFolder/Travel/alpacaPineapple.jpg'
eigthDiv.append(fabulousAlpaca)
fabulousAlpaca.src = '/imagesFolder/Travel/Alpaca Looking Fabulous.jpg'

    // baudelaire.className = "authorImages"

    // const travelList1 = [
    //     ["barranquilla", barranquilla],
    //     ["glaciers", glaciers],
    // ]

    // ["watrongkun", watRongKun],
    // ["japanLights", japanLights],
    // ["Alpaca Looking Fabulous", fabulousAlpaca],
    // ["alpacaPineapple", alpacaPineapple],
    // const travelList2 = [

    // ]
        // const imagesAndTextFunction2 = (list, firstAppended, folder, imageVal, classNameVal) => {
        //     for (let j = 0; j < list.length; j++) {
        //         let name = list[j][0]
        //         let image = list[j][1]

        //         firstAppended.append(image)
        //         image.className = imageVal
        //         image.src = `/imagesFolder/${folder}/${name}.jpg`

        //         const newText = document.createElement('a')
        //         newText.textContent = list[j][0]
        //         secondAppended.append(newText)
        //         newText.className = classNameVal
        //         newText.style.color = "gray"
        //         newText.style.fontSize = "25px"
        //     }
        // }

        // imagesAndTextFunction2(travelList1, sixthDiv, "Travel", "musicImages", "musicName")

// const imagesFunction = (list, appended, folder, imageVal) => {
//     for (let j = 0; j < list.length; j++) {
//         let imageText = list[j][0]
//         let image = list[j][1]

//         appended.append(image)
//         image.className = imageVal
//         image.src = `/imagesFolder/${folder}/${imageText}.jpg`
//     }
// }

// imagesFunction(travelList1, sixthDiv, "Travel", "travelImages")



}



// const countdown = () => {
//     const timeLeft = document.getElementById('time-left')
//     document.body.append(timeLeft)

// //month day year
// const birthday = new Date('05/06/2021')

// const second = 1000
// const minute = second * 60
// const hour = minute * 60
// const day = hour * 24
// let timerId

// function countDown() {
//   const today = new Date()
//   const timeSpan = birthday - today
//   //milliseconds
//   console.log(timeSpan)

//   if (timeSpan <= -day) {
//     timeLeft.innerHTML = 'Hope you had a nice Birthday!!'
//     clearInterval(timerId)
//     return
//   }

//   if (timeSpan <= 0) {
//     timeLeft.innerHTML = 'Happy Birthday!!'
//     clearInterval(timerId)
//     return
//   }


//   const days = Math.floor(timeSpan / day)
//   const hours = Math.floor((timeSpan % day) / hour)
//   const minutes = Math.floor((timeSpan % hour) / minute)
//   const seconds = Math.floor((timeSpan % minute) / second)

//   timeLeft.innerHTML =
//     days + 'days ' + hours + 'hrs ' + minutes + 'mins ' + seconds + 'secs'
// }

// timerId = setInterval(countDown, second)
// }


window.onload = () => {
    page()
    // countdown()
}
