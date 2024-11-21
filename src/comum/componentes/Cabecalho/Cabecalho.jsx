// import { Link } from 'react-router-dom';
// import Avatar from '../Avatar/Avatar';
// import './Cabecalho.css';
// import ServicoAutenticacao from '../../servicos/ServicoAutenticacao';
// import imagemUsario from  '../../PaginaMeuPerfil';



// const instanciaServicoAutenticacao = new ServicoAutenticacao();

// function Cabecalho() {
//   const usuarioLogado = instanciaServicoAutenticacao.buscarUsuarioLogado();

//   return (
//     <header className="cabecalho_root">
//       <Link to="/">
//         <img src="/subarulogo.png" height={50} />
//       </Link>
       
//        <p className='titulopag'> Macacao </p>

//       {usuarioLogado && (
//         <Link to="/meu-perfil">
//           <Avatar nome={usuarioLogado.nome} />
//         </Link>
//       )}
//     </header>
//   );
// }

// export default Cabecalho;


// import { Link } from 'react-router-dom';
// import Avatar from '../Avatar/Avatar';
// import './Cabecalho.css';
// import ServicoAutenticacao from '../../servicos/ServicoAutenticacao';

// const instanciaServicoAutenticacao = new ServicoAutenticacao();

// function Cabecalho() {
//   const usuarioLogado = instanciaServicoAutenticacao.buscarUsuarioLogado();

//   return (
//     <header className="cabecalho_root">
//       <Link to="/">
//         <img src="/subarulogo.png" height={50} />
//       </Link>
       
//       <p className="titulopag"> Macacao </p>

//       {usuarioLogado && (
//         <Link to="/meu-perfil">
//           <Avatar nome={usuarioLogado.nome} perfil={true} imagem={imagemUsuario} />
//         </Link>
//       )}
//     </header>
//   );
// }

// export default Cabecalho;


import { Link } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import './Cabecalho.css';
import ServicoAutenticacao from '../../servicos/ServicoAutenticacao';

const instanciaServicoAutenticacao = new ServicoAutenticacao();

function Cabecalho() {
  const usuarioLogado = instanciaServicoAutenticacao.buscarUsuarioLogado();

  return (
    <header className="cabecalho_root">
      <Link to="/">
        <img src="/subarulogo.png" height={50} />
      </Link>

      <p className="titulopag">Macacao</p>

      {usuarioLogado && (
        <Link className='PFP' to="/meu-perfil">
          <Avatar
            nome={usuarioLogado?.nome}
            perfil={true}
            imagem={usuarioLogado?.foto || ''}
          />
        </Link>
      )}
    </header>
  );
}

export default Cabecalho;
