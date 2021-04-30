import Sugestao from "./Sugestao";

export default function Sidebar(props) {
  const sugestaoArray = [
    {
      imagemUsuario: "assets/img/bad.vibes.memes.svg",
      nomeUsuario: "bad.vibes.memes",
      status: "Segue você",
    },
    {
      imagemUsuario: "assets/img/chibirdart.svg",
      nomeUsuario: "chibirdart",
      status: "Segue você",
    },
    {
      imagemUsuario: "assets/img/razoesparaacreditar.svg",
      nomeUsuario: "razoesparaacreditar",
      status: "Novo no Instagram",
    },
    {
      imagemUsuario: "assets/img/adorable_animals.svg",
      nomeUsuario: "adorable_animals",
      status: "Segue você",
    },
    {
      imagemUsuario: "assets/img/smallcutecats.svg",
      nomeUsuario: "smallcutecats",
      status: "Segue você",
    },
  ];

  return (
    <div class="sidebar">
      <div class="usuario">
        <img src={props.imagem} />
        <div class="texto">
          <strong>{props.usuario}</strong>
          {props.nome}
        </div>
      </div>

      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {sugestaoArray.map((sugestao) => {
          return (
            <Sugestao
              imagemUsuario={sugestao.imagemUsuario}
              nomeUsuario={sugestao.nomeUsuario}
              status={sugestao.status}
            />
          );
        })}
      </div>

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}