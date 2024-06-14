//npm i express => nputk instal library express dari npmjs, wajib di terminal
//nama node-modules wajib untuk simpan modul2
//perhatikan package-lock j,son dan package.json

const express = require ('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(`<h2>Hello World!</h2><hr>`)
  })

  app.get('/profil', (req, res) => {
    res.send('<h1>Profil saya </h1>')
  })
  
  app.listen(port, () => {
    console.log(`app sudah siap ${port}`)
  })

  //npm i nodemon agar tidak perlu lg ctrl c//mmati hidupkan  sebelum mainkan lagi tahap fungsi berikutnya

