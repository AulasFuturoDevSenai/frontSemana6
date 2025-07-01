document.getElementById('load-user').addEventListener('click', carregarUsuario);

function carregarUsuario() {
    fetch('https://randomuser.me/api/')
    .then(Response => Response.json())
    .then(data => {
        const user = data.results[0];

        const foto = user.picture.large;
        const nome = `${user.name.first} ${user.name.last}`;
        const email = user.email;
        const celular = user.cell;

        const card = `
        <img src="${foto}" alt="Foto do Usuário" />
        <h2>${nome}</h2>
        <p>Email: ${email}</p>
        <p>Celular: ${celular}</p>
      `;

      document.getElementById('user-card').innerHTML = card;
    })
    .catch(error => {
      console.error('Erro ao carregar usuário:', error);
      document.getElementById('user-card').innerHTML = `<p>Erro ao carregar o usuário. Tente novamente.</p>`;
    });
}