# API de Upload de Arquivos com MinIO

## Descrição

Este projeto consiste em uma API desenvolvida em Node.js capaz de realizar o armazenamento e a listagem de arquivos utilizando o conceito de armazenamento de objetos. Para simular o serviço AWS S3 localmente, foi utilizado o MinIO executado em um container Docker.

## Objetivo

Desenvolver uma API REST para:

* Realizar upload de arquivos;
* Armazenar arquivos em um bucket MinIO;
* Listar os arquivos armazenados;
* Simular o funcionamento do AWS S3 em ambiente local.

## Tecnologias Utilizadas

* Node.js
* Express
* Docker
* MinIO
* Multer
* Git e GitHub
* Postman

## Estrutura do Projeto

```text
api-minio-upload/
│
├── docker-compose.yml
├── server.js
├── minio.js
├── package.json
├── package-lock.json
├── .gitignore
└── uploads/
```

## Configuração do Ambiente

### 1. Instalar Dependências

```bash
npm install
```

### 2. Iniciar o MinIO

```bash
docker compose up -d
```

### 3. Acessar o MinIO

Painel Web:

http://localhost:9001

Credenciais:

Usuário: admin

Senha: admin123

Criar um bucket chamado:

```text
uploads
```

### 4. Executar a API

```bash
node server.js
```

ou

```bash
npx nodemon server.js
```

## Endpoints

### Upload de Arquivo

**POST** `/upload`

Utilizar o Postman:

* Body
* form-data
* Chave: arquivo
* Tipo: File

Resposta:

```json
{
  "mensagem": "Arquivo enviado com sucesso!"
}
```

### Listar Arquivos

**GET** `/files`

Resposta:

```json
[
  "arquivo1.png",
  "documento.pdf"
]
```

## Testes Realizados

Foram realizados testes utilizando o Postman para:

* Upload de imagens;
* Upload de documentos;
* Listagem dos arquivos armazenados;
* Verificação dos arquivos no bucket do MinIO.

Todos os testes foram executados com sucesso.

## Dificuldades Encontradas

Durante o desenvolvimento foram encontradas algumas dificuldades:

* Configuração inicial do Docker Desktop;
* Problemas de conexão para baixar imagens Docker em rede restrita;
* Configuração do Git e GitHub para publicação do projeto;
* Ajuste do campo de upload no Postman para funcionamento correto do Multer.

Após a correção dessas configurações, o sistema funcionou conforme esperado.

## Conclusão

O projeto permitiu compreender o funcionamento do armazenamento de objetos, a integração entre Node.js e MinIO, além da utilização de containers Docker para simulação de serviços em ambiente local. A solução desenvolvida atende aos requisitos propostos e demonstra uma aplicação prática dos conceitos estudados.

## Autor

Gabriel Lince
Curso de Análise e Desenvolvimento de Sistemas
