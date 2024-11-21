// import { useNavigate } from 'react-router-dom';
// import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
// import Principal from '../../comum/componentes/Principal/Principal';
// import ServicoAutenticacao from '../../comum/servicos/ServicoAutenticacao';
// import Avatar from '../../comum/componentes/Avatar/Avatar';
// import { useState } from 'react';

// const instanciaServicoAutenticacao = new ServicoAutenticacao();

// const PaginaMeuPerfil = () => {
//   const navigate = useNavigate();
//   const usuarioLogado = instanciaServicoAutenticacao.buscarUsuarioLogado();

//   const [imagemUsuario, setImagemUsuario] = useState('');

//   const sair = () => {
//     instanciaServicoAutenticacao.sair();
//     navigate('/login');
//   };

//   const mudarAvatar = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       const reader = new FileReader();

//       reader.onload = function (event) {
//         const base64String = event.target.result;

//         setImagemUsuario(base64String);
//         console.log('##### Usuário:', { ...usuarioLogado, foto: base64String });
//       };

//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <Principal titulo="Meu Perfil" voltarPara="/">
//       <input
//         type="file"
//         accept="image/*"
//         multiple={false}
//         id="fileInput"
//         style={{ display: 'none' }}
//         onChange={mudarAvatar}
//       />
//       <button
//         onClick={() => document.getElementById('fileInput').click()}
//         style={{ backgroundColor: 'transparent', border: 'none', display: 'flex', justifyContent: 'center' }}
//       >
//         <Avatar nome={usuarioLogado.nome} perfil={true} imagem={imagemUsuario} />
//       </button>

//       <div className="campo">
//         <label>Nome</label>
//         <input type="text" value={usuarioLogado.nome} disabled />
//       </div>

//       <div className="campo">
//         <label>Email</label>
//         <input type="text" value={usuarioLogado.email} disabled />
//       </div>

//       <BotaoCustomizado aoClicar={sair}>Sair</BotaoCustomizado>
//     </Principal>
//   );
// };

// export default PaginaMeuPerfil;

// import { useState } from 'react';
// import ServicoAutenticacao from '../../comum/servicos/ServicoAutenticacao';
// import Avatar from '../../comum/componentes/Avatar/Avatar';

// const instanciaServicoAutenticacao = new ServicoAutenticacao();

// const PaginaMeuPerfil = () => {
//   const usuarioLogado = instanciaServicoAutenticacao.buscarUsuarioLogado();
//   const [imagemUsuario, setImagemUsuario] = useState(usuarioLogado?.foto || '');

//   const sair = () => {
//     instanciaServicoAutenticacao.sair();
//     // Redirecionar para a tela de login
//     navigate('/login');
//   };

//   const mudarAvatar = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       const reader = new FileReader();

//       reader.onload = function (event) {
//         const base64String = event.target.result;
//         setImagemUsuario(base64String);

//         // Atualizar a foto no serviço de autenticação
//         instanciaServicoAutenticacao.atualizarFoto(base64String);
//       };

//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="file"
//         accept="image/*"
//         onChange={mudarAvatar}
//         style={{ display: 'none' }}
//         id="fileInput"
//       />
//       <button onClick={() => document.getElementById('fileInput').click()}>
//         <Avatar nome={usuarioLogado?.nome} perfil={true} imagem={imagemUsuario} />
//       </button>

//       <div>
//         <label>Nome</label>
//         <input type="text" value={usuarioLogado?.nome} disabled />
//       </div>

//       <div>
//         <label>Email</label>
//         <input type="text" value={usuarioLogado?.email} disabled />
//       </div>

//       <button onClick={sair}>Sair</button>
//     </div>
//   );
// };

// export default PaginaMeuPerfil;

import { useNavigate } from 'react-router-dom';  // Para navegação
import { useState } from 'react';  // Para o estado
import ServicoAutenticacao from '../../comum/servicos/ServicoAutenticacao';  // Para gerenciar a autenticação
import Avatar from '../../comum/componentes/Avatar/Avatar';  // Para mostrar a imagem do usuário
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';  // Para o botão de logout
import Principal from '../../comum/componentes/Principal/Principal';  // Para estrutura da página

const instanciaServicoAutenticacao = new ServicoAutenticacao();

const PaginaMeuPerfil = () => {
  const navigate = useNavigate();  // Para redirecionar após logout
  const usuarioLogado = instanciaServicoAutenticacao.buscarUsuarioLogado();  // Recupera o usuário logado
  const [imagemUsuario, setImagemUsuario] = useState(usuarioLogado?.foto || '');  // Define imagem do usuário com valor inicial

  // Função para fazer logout
  const sair = () => {
    instanciaServicoAutenticacao.sair();  // Remove o usuário logado
    navigate('/login');  // Redireciona para a página de login
  };

  // Função para mudar a imagem de perfil
  const mudarAvatar = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (event) {
        const base64String = event.target.result;
        setImagemUsuario(base64String);  // Atualiza a imagem no estado

        // Atualiza a foto do usuário no serviço de autenticação
        instanciaServicoAutenticacao.atualizarFoto(base64String);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <Principal titulo="Meu Perfil" voltarPara="/">  {/* Envolvendo com o componente Principal */}
      <div className="container">
        <input
          type="file"
          accept="image/*"
          onChange={mudarAvatar}
          style={{ display: 'none' }}  // Esconde o input de arquivo
          id="fileInput"
        />
        <button
          onClick={() => document.getElementById('fileInput').click()}
          style={{
            backgroundColor: 'transparent', 
            border: 'none', 
            display: 'flex', 
            justifyContent: 'center',
            padding: '10px'
          }}  // Adicionando algum estilo ao botão
        >
          <Avatar nome={usuarioLogado?.nome} perfil={true} imagem={imagemUsuario} />
        </button>

        <div className="campo">
          <label>Nome</label>
          <input type="text" value={usuarioLogado?.nome} disabled />
        </div>

        <div className="campo">
          <label>Email</label>
          <input type="text" value={usuarioLogado?.email} disabled />
        </div>

        <BotaoCustomizado aoClicar={sair}>Sair</BotaoCustomizado>  {/* Botão de logout com o estilo do seu componente */}
      </div>
    </Principal>
  );
};

export default PaginaMeuPerfil;
