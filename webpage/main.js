// Função para realizar o logout
function logout() {
  // Remover o token armazenado localmente
  localStorage.removeItem('token');

  // Redirecionar o usuário para a página de login
  window.location.href = '/login';
}

// Evento para o botão de logout
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('logoutButton').addEventListener('click', function() {
    logout();
  });
});


function exibirEducacao() {
  const url = 'http://localhost:4242/api/educacao/get';
  const educacaoDiv = document.getElementById('educacao');

  fetch(url)
    .then(response => response.json())
    .then(data => {
      let html = `
        <div class="card">
          <h2><i class="fas fa-briefcase stroke-transparent"></i>&nbsp;&nbsp;&nbsp;Educação</h2>
          <ul>
      `;

      data.forEach(edu => {
        html += `
          <li>
            <p class="tags">${edu.institution}<br><span>${edu.degree} | </span><span>${edu.duration}</span></span></p>
          </li>
        `;
      });
      const token = localStorage.getItem('token');
      if (token) {
        html += `
        <div class="button-container button-educacao">
          <button onclick="adicionarEducacao()">Adicionar</button>
          <button onclick="editarEducacao()">Editar</button>
          <button onclick="apagarEducacao()">Apagar</button>
        </div>
      `;
      
      }

      html += `
          </ul>
        </div>
      `;

      // Definir a string HTML como o conteúdo da div de educação
      educacaoDiv.innerHTML = html;

    })
    .catch(error => {
      console.error('Ocorreu um erro:', error);
    });
}

exibirEducacao();



  function adicionarEducacao() {

    const institution = prompt('Digite o nome da instituição de ensino:');
    const degree = prompt('Digite o grau ou curso:');
    const duration = prompt('Digite a duração:');
  
    // Verificar se os campos não estão em branco
    if (!institution || !degree || !duration) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
  
    // Fazer uma requisição POST para adicionar a educação no servidor
    const url = 'http://localhost:4242/api/educacao/create';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ institution, degree, duration }),
    };
  
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        // Atualizar a exibição de educação após adicionar
        exibirEducacao();
      })
      .catch(error => {
        console.error('Ocorreu um erro ao adicionar a educação:', error);
      });
  }
  
  function editarEducacao(id) {

    const newInstitution = prompt('Digite o novo nome da instituição de ensino:');
    const newDegree = prompt('Digite o novo grau ou curso:');
    const newDuration = prompt('Digite a nova duração:');
  
    // Verificar se os campos não estão em branco
    if (!newInstitution || !newDegree || !newDuration) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
  
    // Fazer uma requisição PUT para editar a educação no servidor
    const url = `http://localhost:4242/api/educacao/update/${id}`;
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ institution: newInstitution, degree: newDegree, duration: newDuration }),
    };
  
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        // Atualizar a exibição de educação após editar
        exibirEducacao();
      })
      .catch(error => {
        console.error('Ocorreu um erro ao editar a educação:', error);
      });
  }
  
  function apagarEducacao(id) {
    // Exibir uma caixa de diálogo de confirmação
    const confirmDelete = confirm('Tem certeza que deseja apagar esta entrada de educação?');
  
    if (!confirmDelete) {
      return;
    }
  
    // Fazer uma requisição DELETE para remover a educação do servidor
    const url = `http://localhost:4242/api/educacao/delete/${id}`;
    const options = {
      method: 'DELETE',
    };
  
    fetch(url, options)
      .then(response => {
        if (response.ok) {
          // Atualizar a exibição de educação após apagar
          exibirEducacao();
        } else {
          throw new Error('Ocorreu um erro ao apagar a educação.');
        }
      })
      .catch(error => {
        console.error('Ocorreu um erro ao apagar a educação:', error);
      });
  }
 
  exibirEducacao();
  
  

  function exibirAreaInteresse() {
    const url = 'http://localhost:4242/api/areainteresse/get';
    const areaInteresseDiv = document.getElementById('areainteresse');
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        let html = `
          <div class="card">
            <h2><i class="fas fa-briefcase stroke-transparent"></i>&nbsp;&nbsp;&nbsp;Áreas de Interesse</h2>
            <ul>
        `;
  
        // Iterar sobre os dados de áreas de interesse e adicionar à string HTML
        data.forEach(area => {
          html += `
            <li>
              <p class="tags">${area.nome}<br></p>
            </li>
          `;
        });
  
        html += `
            </ul>
        `;
  
        // Verificar se o token está ativo
        const token = localStorage.getItem('token');
        if (token) {
          html += `
          <div class="button-container button-areas-interesse">
            <button onclick="adicionarAreaInteresse()">Adicionar</button>
            <button onclick="editarAreaInteresse()">Editar</button>
            <button onclick="apagarAreaInteresse()">Apagar</button>
          </div>
        `;
        
        }
  
        html += `
          </div>
        `;
  
        // Definir a string HTML como o conteúdo da div de áreas de interesse
        areaInteresseDiv.innerHTML = html;
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      });
  }
  
  
  function adicionarAreaInteresse() {
    const nome = prompt('Digite o nome da área de interesse:');
  
    // Verificar se o campo não está em branco
    if (!nome) {
      alert('Por favor, preencha o campo!');
      return;
    }
  
    // Fazer uma requisição POST para adicionar a área de interesse no servidor
    const url = 'http://localhost:4242/api/areainteresse/create';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nome }),
    };
  
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        // Atualizar a exibição de áreas de interesse após adicionar
        exibirAreaInteresse();
      })
      .catch(error => {
        console.error('Ocorreu um erro ao adicionar a área de interesse:', error);
      });
  }
  
  function editarAreaInteresse() {
    const nomeAtual = prompt('Digite o nome atual da área de interesse:');
    const novoNome = prompt('Digite o novo nome da área de interesse:');
  
    // Verificar se os campos não estão em branco
    if (!nomeAtual || !novoNome) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
  
    // Fazer uma requisição PUT para editar a área de interesse no servidor
    const url = 'http://localhost:4242/api/areainteresse/update';
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nomeAtual, novoNome }),
    };
  
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        // Atualizar a exibição de áreas de interesse após editar
        exibirAreaInteresse();
      })
      .catch(error => {
        console.error('Ocorreu um erro ao editar a área de interesse:', error);
      });
  }
  
  function apagarAreaInteresse() {
    const nome = prompt('Digite o nome da área de interesse a ser apagada:');
  
    // Verificar se o campo não está em branco
    if (!nome) {
      alert('Por favor, preencha o campo!');
      return;
    }
  
    // Fazer uma requisição DELETE para apagar a área de interesse no servidor
    const url = `http://localhost:4242/api/areainteresse/delete/${nome}`;
    const options = {
      method: 'DELETE',
    };
  
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        // Atualizar a exibição de áreas de interesse após apagar
        exibirAreaInteresse();
      })
      .catch(error => {
        console.error('Ocorreu um erro ao apagar a área de interesse:', error);
      });
  }
  
  exibirAreaInteresse();
  
  
  

  function exibirObjetivos() {
    const url = 'http://localhost:4242/api/objective/get';
    const objetivosDiv = document.getElementById('objetivos');
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        let html = `
          <div class="card">
            <h2><i class="fas fa-briefcase stroke-transparent"></i>&nbsp;&nbsp;&nbsp;Objetivos Profissionais</h2>
            <ul>
        `;
  
        // Iterar sobre os dados de objetivos profissionais e adicionar à string HTML
        data.forEach(objetivo => {
          html += `
            <li>
              <p class="tags">${objetivo.description}<br></p>
            </li>
          `;
        });
  
        html += `
            </ul>
        `;
  
        // Verificar se o token está ativo
        const token = localStorage.getItem('token');
        if (token) {
          html += `
          <div class="button-container button-objetivos">
            <button onclick="adicionarObjetivo()">Adicionar</button>
            <button onclick="editarObjetivo()">Editar</button>
            <button onclick="apagarObjetivo()">Apagar</button>
          </div>
        `;
        
        }
  
        html += `
          </div>
        `;
  
        // Definir a string HTML como o conteúdo da div de objetivos profissionais
        objetivosDiv.innerHTML = html;
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      });
  }
  
  function adicionarObjetivo() {
    const description = prompt('Digite a descrição do objetivo profissional:');
  
    // Verificar se o campo não está em branco
    if (!description) {
      alert('Por favor, preencha o campo!');
      return;
    }
  
    // Fazer uma requisição POST para adicionar o objetivo profissional no servidor
    const url = 'http://localhost:4242/api/objective/create';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description }),
    };
  
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        // Atualizar a exibição de objetivos profissionais após adicionar
        exibirObjetivos();
      })
      .catch(error => {
        console.error('Ocorreu um erro ao adicionar o objetivo profissional:', error);
      });
  }
  
  function editarObjetivo() {
    const descriptionAtual = prompt('Digite a descrição atual do objetivo profissional:');
    const novaDescricao = prompt('Digite a nova descrição do objetivo profissional:');
  
    // Verificar se os campos não estão em branco
    if (!descriptionAtual || !novaDescricao) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
  
    // Fazer uma requisição PUT para editar o objetivo profissional no servidor
    const url = 'http://localhost:4242/api/objective/update';
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ descriptionAtual, novaDescricao }),
    };
  
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        // Atualizar a exibição de objetivos profissionais após editar
        exibirObjetivos();
      })
      .catch(error => {
        console.error('Ocorreu um erro ao editar o objetivo profissional:', error);
      });
  }
  
  function apagarObjetivo() {
    const description = prompt('Digite a descrição do objetivo profissional a ser apagado:');
  
    // Verificar se o campo não está em branco
    if (!description) {
      alert('Por favor, preencha o campo!');
      return;
    }
  
    // Fazer uma requisição DELETE para apagar o objetivo profissional no servidor
    const url = 'http://localhost:4242/api/objective/delete';
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description }),
    };
  
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        // Atualizar a exibição de objetivos profissionais após apagar
        exibirObjetivos();
      })
      .catch(error => {
        console.error('Ocorreu um erro ao apagar o objetivo profissional:', error);
      });
  }
  
  exibirObjetivos();


  function exibirLanguages() {
    const url = 'http://localhost:4242/api/language/get';
    const languagesDiv = document.getElementById('languages');
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        let html = `
          <div class="card">
            <h2><i class="fas fa-language stroke-transparent"></i>&nbsp;&nbsp;&nbsp;Idiomas</h2>
            <ul>
        `;
  
        // Iterar sobre os dados de idiomas e adicionar à string HTML
        data.forEach(language => {
          html += `
            <li>
              <p class="tags">${language.languageName}<br></p>
            </li>
          `;
        });
  
        html += `
            </ul>
        `;
  
        // Verificar se o token está ativo
        const token = localStorage.getItem('token');
        if (token) {
          html += `
          <div class="button-container button-languages">
            <button onclick="adicionarLanguage()">Adicionar</button>
            <button onclick="editarLanguage()">Editar</button>
            <button onclick="apagarLanguage()">Apagar</button>
          </div>
        `;
        
        }
  
        html += `
          </div>
        `;
  
        // Definir a string HTML como o conteúdo da div de idiomas
        languagesDiv.innerHTML = html;
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      });
  }
  
  
  function adicionarLanguage() {
    const languageName = prompt('Digite o nome do idioma:');
  
    // Verificar se o campo não está em branco
    if (!languageName) {
      alert('Por favor, preencha o campo!');
      return;
    }
  
    // Fazer uma requisição POST para adicionar o idioma no servidor
    const url = 'http://localhost:4242/api/language/create';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ languageName }),
    };
  
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        // Atualizar a exibição de idiomas após adicionar
        exibirLanguages();
      })
      .catch(error => {
        console.error('Ocorreu um erro ao adicionar o idioma:', error);
      });
  }
  
  function editarLanguage() {
    const languageNameAtual = prompt('Digite o nome do idioma atual:');
    const novoLanguageName = prompt('Digite o novo nome do idioma:');
  
    // Verificar se os campos não estão em branco
    if (!languageNameAtual || !novoLanguageName) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
  
    // Fazer uma requisição PUT para editar o idioma no servidor
    const url = 'http://localhost:4242/api/language/update';
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ languageNameAtual, novoLanguageName }),
    };
  
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        // Atualizar a exibição de idiomas após editar
        exibirLanguages();
      })
      .catch(error => {
        console.error('Ocorreu um erro ao editar o idioma:', error);
      });
  }
  
  function apagarLanguage() {
    const languageName = prompt('Digite o nome do idioma a ser apagado:');
  
    // Verificar se o campo não está em branco
    if (!languageName) {
      alert('Por favor, preencha o campo!');
      return;
    }
  
    // Fazer uma requisição DELETE para apagar o idioma no servidor
    const url = 'http://localhost:4242/api/language/delete';
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ languageName }),
    };
  
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        // Atualizar a exibição de idiomas após apagar
        exibirLanguages();
      })
      .catch(error => {
        console.error('Ocorreu um erro ao apagar o idioma:', error);
      });
  }
  
  exibirLanguages();

  function exibirSkills() {
    const url = 'http://localhost:4242/api/skills/get';
    const skillsDiv = document.getElementById('skills');
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        let html = `
          <div class="card">
            <h2><i class="fas fa-check-circle stroke-transparent"></i>&nbsp;&nbsp;&nbsp;Habilidades</h2>
            <ul>
        `;
  
        // Iterar sobre os dados de habilidades e adicionar à string HTML
        data.forEach(skill => {
          html += `
            <li>
              <span class="skill-name">${skill.skillName}</span>
            </li>
          `;
        });
  
        html += `
            </ul>
        `;
  
        // Verificar se o token está ativo
        const token = localStorage.getItem('token');
        if (token) {
          html += `
          <div class="button-container button-skills">
            <button onclick="adicionarSkill()">Adicionar</button>
            <button onclick="editarSkill()">Editar</button>
            <button onclick="apagarSkill()">Apagar</button>
          </div>
        `;
        
        }
  
        html += `
          </div>
        `;
  
        // Definir a string HTML como o conteúdo da div de habilidades
        skillsDiv.innerHTML = html;
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      });
  }
  
  
  function adicionarSkill() {
    const skillName = prompt('Digite o nome da habilidade:');
  
    // Verificar se o campo não está em branco
    if (!skillName) {
      alert('Por favor, preencha o campo!');
      return;
    }
  
    // Fazer uma requisição POST para adicionar a habilidade no servidor
    const url = 'http://localhost:4242/api/skills/create';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ skillName }),
    };
  
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        // Atualizar a exibição de habilidades após adicionar
        exibirSkills();
      })
      .catch(error => {
        console.error('Ocorreu um erro ao adicionar a habilidade:', error);
      });
  }
  
  function editarSkill() {
    const skillNameAtual = prompt('Digite o nome da habilidade atual:');
    const novoSkillName = prompt('Digite o novo nome da habilidade:');
  
    // Verificar se os campos não estão em branco
    if (!skillNameAtual || !novoSkillName) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
  
    // Fazer uma requisição PUT para editar a habilidade no servidor
    const url = 'http://localhost:4242/api/skills/update';
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ skillNameAtual, novoSkillName }),
    };
  
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        // Atualizar a exibição de habilidades após editar
        exibirSkills();
      })
      .catch(error => {
        console.error('Ocorreu um erro ao editar a habilidade:', error);
      });
  }
  
  function apagarSkill() {
    const skillName = prompt('Digite o nome da habilidade a ser apagada:');
  
    // Verificar se o campo não está em branco
    if (!skillName) {
      alert('Por favor, preencha o campo!');
      return;
    }
  
    // Fazer uma requisição DELETE para apagar a habilidade no servidor
    const url = 'http://localhost:4242/api/skills/delete';
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ skillName }),
    };
  
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        // Atualizar a exibição de habilidades após apagar
        exibirSkills();
      })
      .catch(error => {
        console.error('Ocorreu um erro ao apagar a habilidade:', error);
      });
  }
  
  exibirSkills();
  
  
  