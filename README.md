# fullcycle-desafio01

<b>Build da aplicação no Docker</b>

- Comando para realizar build da aplicação em docker: 

docker build --tag maratonadesafio:1.0 .

- Comando para executar aplicação na porta 3000 a partir do container docker: 

docker run --publish 3000:3000 --detach --name md maratonadesafio:1.0 

- Comando para parar execução do container docker: 

docker stop md

<b>Realizando o push em repositório remoto do DockerHub</b>

- Comando para determinar a tag do container remoto

docker tag maratonadesafio:1.0 alexdamiao86/maratonadesafio01:1.0

- Comando para subir o container local para remoto

docker push alexdamiao86/maratonadesafio01:1.0

<b>Executar container remoto</b> 

- Comando para executar o container docker que está em repositório remoto

docker run -p 3000:3000 alexdamiao86/maratonadesafio01:1.0
