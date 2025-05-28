const express = require('express');
const app     = express();
const dotenv  = require('dotenv');
const cors    = require('cors');
const UserRoutes = require('./routers/UserRoutes')

// Genel Ayarlar 
dotenv.config();
app.use(express.json());
app.use(cors())

// Mongoose Bağlantısı
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Bağlantısı Başarılı'))
.catch(err => console.error('MongoDB Bağlantısı Başarısız:', err));

// Rota Yönlendirme
app.use('/user',UserRoutes)

// Sunucuyu Ayağa Kaldırma
const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log('Sunucu Aktif Çalışıyor')
})




