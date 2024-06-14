//npm i express => nputk instal library express dari npmjs, wajib di terminal
//nama node-modules wajib untuk simpan modul2
//perhatikan package-lock j,son dan package.json

const express = require ('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs') //setting penggunaan template engine untuk express
app.set('views', './view-ejs') //setting penggunaan folder untuk menyimpan file.ejs

//membuat basic routing 
app.get('/', (req, res) => {
    res.render('beranda')
  })

  app.get('/profil', (req, res) => {
    res.render('profil')
  })

  app.get('/pengalaman', (req, res) => {
      res.render('daftar-pengalaman',{
        nama :'ss',
        posisi:'aa',
        perusahaan: 'bb',
        gaji: '9',

    })
  })

  
  app.listen(port, () => {
    console.log(`app sudah siap ${port}`)
  })

  //npm i nodemon agar tidak perlu lg ctrl c//mmati hidupkan  sebelum mainkan lagi tahap fungsi berikutnya

