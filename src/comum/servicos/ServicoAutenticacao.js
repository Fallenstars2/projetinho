// import ServicoUsuarios from './ServicoUsuarios';

// const instanciaServicoUsuarios = new ServicoUsuarios();

// class ServicoAutenticacao {
//   login(email, senha) {
//     const usuariosDoLocalStorage = instanciaServicoUsuarios.listar();

//     const usuarioLogado = usuariosDoLocalStorage.find((u) => u.email === email && u.senha === senha);

//     if (usuarioLogado) {
//       localStorage.setItem('usuario-logado', JSON.stringify(usuarioLogado));
//     }

//     return usuarioLogado;
//   }

//   buscarUsuarioLogado() {
//     const usuarioLogado = localStorage.getItem('usuario-logado');
//     if (usuarioLogado) {
//       return JSON.parse(usuarioLogado);
//     }

//     return undefined;
//   }

//   sair() {
//     localStorage.removeItem('usuario-logado');
//   }
// }

// export default ServicoAutenticacao;


import ServicoUsuarios from './ServicoUsuarios';

const instanciaServicoUsuarios = new ServicoUsuarios();

class ServicoAutenticacao {
  login(email, senha) {
    const usuariosDoLocalStorage = instanciaServicoUsuarios.listar();

    const usuarioLogado = usuariosDoLocalStorage.find((u) => u.email === email && u.senha === senha);

    if (usuarioLogado) {
      // Armazenar usuário no localStorage, incluindo a foto
      localStorage.setItem('usuario-logado', JSON.stringify(usuarioLogado));
    }

    return usuarioLogado;
  }

  buscarUsuarioLogado() {
    const usuarioLogado = localStorage.getItem('usuario-logado');
    if (usuarioLogado) {
      return JSON.parse(usuarioLogado);
    }

    return undefined;
  }

  sair() {
    localStorage.removeItem('usuario-logado');
  }

  atualizarFoto(novaFoto) {
    // Buscar o usuário logado atual
    const usuarioLogado = this.buscarUsuarioLogado();

    if (usuarioLogado) {
      // Atualizar a foto do usuário
      usuarioLogado.foto = novaFoto;

      // Salvar o usuário novamente no localStorage com a nova foto
      localStorage.setItem('usuario-logado', JSON.stringify(usuarioLogado));
    }
  }
}

export default ServicoAutenticacao;
