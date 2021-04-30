import RenderPost from "./Post";

export default function RenderPosts() {
  const postsArray = [
    {
      icone: "assets/img/meowed.svg",
      usuario: "meowed",
      imagemPost: "assets/img/gato-telefone.svg",
      curtidasImg: "assets/img/respondeai.svg",
      curtidasUsuario: "respondeai",
      curtidasNumero: "101.523"
    },
    {
      icone: "assets/img/barked.svg",
      usuario: "barked",
      imagemPost: "assets/img/dog.svg",
      curtidasImg: "assets/img/adorable_animals.svg",
      curtidasUsuario: "adorable_animals",
      curtidasNumero: "99.159"
    },
    {
      icone: "assets/img/barked.svg",
      usuario: "barked",
      imagemPost: "assets/img/dog.svg",
      curtidasImg: "assets/img/adorable_animals.svg",
      curtidasUsuario: "adorable_animals",
      curtidasNumero: "99.159"
    },
  ];

  return (
    <div class="posts">
      {postsArray.map((post) => {
        return (
          <RenderPost
            usuario={post.usuario}
            icone={post.icone}
            imagem={post.imagemPost}
            curtidasImg={post.curtidasImg}
            curtidasUsuario={post.curtidasUsuario}
            curtidasNumero={post.curtidasNumero}
          />
        );
      })}
    </div>
  );
}
