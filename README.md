# PortalOfertas

Projeto Criado utilizando [Angular CLI](https://github.com/angular/angular-cli) version 13.3.4.

# Tecnologias de Front-end
Bootstrap 5v
PrimeNG

## Informações de build
Verifique se você possui os seguintes softwares instalados:

NodeJS --> Versão 15 +
Npm --> Versão 8.1.2
Angular CLI --> Versão 13 +

##Subindo o Projeto
Ao clonar o repositorio em sua maquina siga os seguintes passos:

Passo 1:
npm install
(Este comando irá automáticamente baixar todas as dependencias utlizadas no projeto)

Passo 2:
npm start
(Este comando irá executar a aplicação fazendo com que ela inicie no endereço http://localhost:4200)

##Json Server
Para Back-end no consumo de api foi utilizado o Json server um arquivo que simula uma API para o consumo do front-end;

Este arquivo se encontra dentro da pasta esta nomeado como "db.json"

Abra este arquivo utilizando um terminal e rode o seguinte comando:

Passo 1:
npm install -g json-server
(Este comando irá instalar o json server)

passo 2: 
json-server --watch db.json --port 3004
(Este comando irá subir a API no endereço http://localhost:3004/ofertas)


