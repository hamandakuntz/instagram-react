import RenderSugestao from "./Sugestao";

export default function RenderSidebar(props) {
  const sugestaoArray = [
    {
      imagemUsuario: "assets/img/bad.vibes.memes.svg",
      nomeUsuario: "bad.vibes.memes",
    },
    {
      imagemUsuario: "assets/img/chibirdart.svg",
      nomeUsuario: "chibirdart",
    },
    {
      imagemUsuario: "assets/img/razoesparaacreditar.svg",
      nomeUsuario: "razoesparaacreditar",
    },
    {
      imagemUsuario: "assets/img/adorable_animals.svg",
      nomeUsuario: "adorable_animals",
    },
    {
      imagemUsuario: "assets/img/smallcutecats.svg",
      nomeUsuario: "smallcutecats",
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
            <RenderSugestao
              imagemUsuario={sugestao.imagemUsuario}
              nomeUsuario={sugestao.nomeUsuario}
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
