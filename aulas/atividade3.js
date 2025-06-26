function verificarParidade(numero) {
    return new Promise((resolve, reject) => {
        if (numero %2 === 0) {
            resolve('numero par');
        } else {
            reject('numero impar');
        }    
    });
}

async function executar(numero) {
  try {
    const resultado = await verificarParidade(numero);
    console.log(resultado);
  } catch (erro) {
    console.log(erro);
  } finally {
    console.log(`Número informado: ${numero}`);
  }
}

// Testes
executar(4); // Par
executar(7); // Ímpar