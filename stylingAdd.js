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
    title.style.fontSize = "50px"
    title.style.fontStyle = "bold"
    title.style.textAlign = "center"
    document.body.append(title)

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
        ["Sappho", sappho]
    ]

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

    const textDiv2 = document.createElement('div')
    document.body.append(textDiv2)
    textDiv2.className = "imageText"

    const thirdDiv = document.createElement('div')
    document.body.append(thirdDiv)
    thirdDiv.className = "thirdDiv"

    const videoGamesList = [
        ["Skyrim", skyrim],
        ["Elden Ring", eldenRing],
        ["Cyberpunk 2077", cyberpunk]
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
    ["Ghost in the Shell", ghostInTheShell]
]

imagesAndTextFunction(moviesList, fourthDiv, textDiv3, "Movies", "moviesImages", "filmName")

    const header6 = document.createElement('h6')
    header6.className = 'header'
    header6.textContent = "music that I enjoy"
    document.body.append(header6)

    const karaoke = document.createElement('img')
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
        ["K-pop", kpop],
        ["Classical", classical],
    ]

imagesAndTextFunction(musicList, fifthDiv, textDiv4, "Music", "musicImages", "musicName")

    const p1 = document.createElement('p')
    p1.className = 'p1'
    p1.textContent = "I traveled abroad for many years as a freelance writer and ESL teacher,"
    document.body.append(p1)

    const p2 = document.createElement('p')
    p2.className = 'p2'
    p2.textContent = "living in Colombia, Chile, Bangkok, and Taiwan."
    document.body.append(p2)

    const glaciers = document.createElement('img')
    const japanLights = document.createElement('img')
    const watRongKun = document.createElement('img')

    const sixthDiv = document.createElement('div')
    document.body.append(sixthDiv)
    sixthDiv.className = "sixthDiv"

    sixthDiv.append(glaciers)
    glaciers.src = '/imagesFolder/Travel/glaciers.jpg'

    const seventhDiv = document.createElement('div')
    document.body.append(seventhDiv)
    seventhDiv.className = "seventhDiv"

    seventhDiv.append(watRongKun)
    watRongKun.src = '/imagesFolder/Travel/watrongkun.jpg'

    const eighthDiv = document.createElement('div')
    document.body.append(eighthDiv)
    eighthDiv.className = "eighthDiv"

    eighthDiv.append(japanLights)
    japanLights.src = '/imagesFolder/Travel/japanLights.jpg'
}


window.onload = () => {
    page()
}
