document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita recarregar a pagina

    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value; 
    
    const postData = {
        title: title,
        body: body,
        userId: 1
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Resposta da API:', data);
        window.alert('Dados salvos com sucesso');
    })
    .catch(error => {
        console.error('Erro:', error);
        window.alert('Erro ao salvar os dados. Tente novamente.');
    });
    });