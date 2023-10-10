const Click = document.getElementById('Click')
const emoji = []
const newEmoji = document.getElementById('new-Emoji')
const emojiName = document.getElementById('emoji-name')


async function getEmoji () {
  try {
    let response = await fetch(
      'https://emoji-api.com/emojis?access_key=071d8eb322368e73b08dfe8b9eefd439ed38395a'
    )

    var2 = await response.json()
    for (let i = 0; i < 1500; i++) {
      emoji.push({
        emojiName: var2[i].character,
        emojiCode: var2[i].unicodeName
      })
    }

  } catch (error) {
    console.error('Error fetching emoji data:', error)
  }
}

function getRandomEmoji () {
  const var3 = Math.floor(Math.random() * emoji.length)
  Click.innerText = emoji[var3].emojiName
  emojiName.innerText = emoji[var3].emojiCode
}

Click.addEventListener('click', getRandomEmoji)
newEmoji.addEventListener('click', getRandomEmoji)
getEmoji()
