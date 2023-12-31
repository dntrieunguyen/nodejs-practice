import express from 'express';
import path from 'path';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '.'));

app.get('/', (req, res) => {
   res.render('index', { title: 'trang chủ' });
});

app.listen(3000);
