// Exercise JavaScript ES6+ 01

// 01.1
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
  await delay();
  console.log('1s');

  await delay();
  console.log('2s');

  await delay();
  console.log('3s');
}

umPorSegundo();

// 01.2
import axios from 'axios';

async function getUserFromGithub(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (err) {
    console.warn(`Usuário não existe!\n${err}`);
  }
}

getUserFromGithub('sthanleyso');
getUserFromGithub('sthanleys7');

// 01.3
class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response.data);
    } catch (err) {
      console.warn(`Repositório não existe!\n${err}`);
    }
  }
}

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');

// 01.4
const buscaUsuario = async user => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (err) {
    console.warn(`Usuário não existe!\n${err}`);
  }
};

buscaUsuario('diego3g');
