require('dotenv').config();

const express = require('express');
const multer = require('multer');
const fs = require('fs');
const minioClient = require('./minio');

const app = express();

const upload = multer({
  dest: 'uploads/'
});

app.post('/upload', upload.single('arquivo'), async (req, res) => {
  try {
    const file = req.file;

    await minioClient.fPutObject(
      process.env.BUCKET_NAME,
      file.originalname,
      file.path
    );

    fs.unlinkSync(file.path);

    res.json({
      mensagem: 'Arquivo enviado com sucesso!'
    });

  } catch (error) {
    res.status(500).json(error);
  }
});

app.get('/files', async (req, res) => {

  const arquivos = [];

  const stream = minioClient.listObjects(
    process.env.BUCKET_NAME,
    '',
    true
  );

  stream.on('data', obj => {
    arquivos.push(obj.name);
  });

  stream.on('end', () => {
    res.json(arquivos);
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});