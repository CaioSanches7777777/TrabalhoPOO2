# TrabalhoPOO2
## Arthur Daleprani e Caio Sanchez

## MiniMundo
A Universidade de Vila Velha realiza em seu campus todo ano o InovaWeek, evento de inovação e tecnologia.
Nesse evento há muitas apresentações realizadas por alunos, e essas avaliações são avaliadas por professores.
Os alunos formam grupos, onde há um lider, que é responsavel pelo grupo, porém a nota é igual para todos os integrante.
Cada grupo tem seu propio estande, que é marcado por uma numeração, e cada professor recebe um numero X de estandes para avaliar,
por exemplo se ele receber 5 estandes, ele vai saber qual é a numeração de cada estante.

## Diagrama
![Diagrama](https://github.com/CaioSanches7777777/TrabalhoPOO2/assets/102961025/58a80b2d-90b1-474d-beac-ac290bc38c96)
## Passo a passo da configuração do ambiente
### npx tsc --init Para inicializar o TS.
### npm install prisma --save-dev Para instalar as dependencias do Prisma.
### npx prisma init --datasource-provider sqlite Para configurar o SQL Lite como o banco de dados que será ultilizado.
### npx prisma migrate dev --name init Migra as tabelas para o banco de dados.
### npx ts-node index.ts Envia os dados para o Banco de Dados.

