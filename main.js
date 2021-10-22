const LinksSocialMedia = {
  github: "WebsterDias",
  youtube: "rocketseat" ,
  facebook: "rocketseat",
  instagram: "rocketseat_oficial",
  twitter: "rocketseat"
}

function changeSocialMediaLinks(){
  // DOM = Document Object Model - Modelo de Objeto de Documento (mapeamento das tags HTML)
  //document.getElementById('userName').textContent = "Webster Dias Wolak"
  
  // Recurso exclusivo para a tag com 'id', acessar diretamente atraves do nome atribuido ao id
  //userName.textContent = "Retsbew Teste"

  // .children = equivale ao '.hasNext' do java
  // neste laço de repetição, varremos cada uma das li's dentro da ul
  for(let li of socialLinks.children){
    const social = li.getAttribute('class')
    
    // `` - crase, formata a entrada pra usar variáveis
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

  }

}

changeSocialMediaLinks()

function getGitHubProfileInfos(){

  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  
  // fetch pega o JSON e grada pra si, só podemos acessar o JSON através do then, que, caso tudo tenha ocorrido bem no fetch o JSON entra no then
  
  // then é traduzido como 'promessa', then's podem ser aninhados e um pega a resposta do outro (anterior)

  // ARROW FUNCTION - funções de flecha, forma reduzida de se escrever funções
  // definição: funcao "=>" {} - (funcao1, funcao2) => {} - () => {}
  
  // a arrow function em questão apenas pega a resposta (response) e transforma em .json, já que o fetch (buscar) não identifica que a resposta é um .json, apenas joga todo o conteúdo em um objeto (dicionario, chave - valor)
  // ainda neste caso, não utilizouse as chaves (response => {response.json()}) porque a arrow function em questão tem apenas uma instrução

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    login.href = data.html_url
    userGit.textContent = data.login
    userImage.src = data.avatar_url
    bio.textContent = data.bio
  })

}

getGitHubProfileInfos()