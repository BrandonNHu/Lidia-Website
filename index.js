import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const app = express();

app.use(express.static(path.join(__dirname, 'public/views')));
app.use('/styles', express.static(path.join(__dirname, 'public/styles')))
app.use('/scrypts', express.static(path.join(__dirname, 'public/scripts')))
app.use('/resources', express.static(path.join(__dirname, 'public/resources')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'home.html'))
})

app.listen(process.env.PORT, () => {
  console.log('Server Listening on http://')
})
