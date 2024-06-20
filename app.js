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
        pajak:(this.gaji>8)?'gaji anda kena pajak': 'aman, ga perlu bayar pajak',
       
    })
  })

  app.get('/karyawan',async (req,res)=> {
      const m_karyawan= require('./model/m_karyawan')
      let dataview ={
        semua_karyawan: await m_karyawan.get_semua_karyawan(),
      }
      res.render('karyawan/all', dataview)
    
  })

  app.get('/karyawan/detail/:id_karyawan',async (req,res)=> {//ada penambahan id karyawan urlnya
    const m_karyawan= require('./model/m_karyawan')
    const id= req.params.id_karyawan 
    //request untuk menangkap apa yg diminta, cth ketika diklik no 1, maka param menangkap id dr url:/no urut 1 untuk dikirim ke get satu karyawan
    let dataview ={
      detail_karyawan: await m_karyawan.get_satu_karyawan(id),
    }
    res.render('karyawan/detail', dataview)
  
})

  
  app.listen(port, () => {
    console.log(`app sudah siap ${port}`)
  })

  //npm i nodemon agar tidak perlu lg ctrl c//mmati hidupkan  sebelum mainkan lagi tahap fungsi berikutnya

