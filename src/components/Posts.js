import Post from "./Post";

export default function Posts() {
  const postsArray = [
    {
      icone: "assets/img/meowed.svg",
      usuario: "meowed",
      imagemPost: "assets/img/gato-telefone.svg",
      curtidas: {
        imagem: "assets/img/respondeai.svg",
        usuario: "respondeai",
        numero: "101.523",
      },
    },
    {
      icone: "assets/img/barked.svg",
      usuario: "barked",
      imagemPost: "assets/img/dog.svg",
      curtidas: {
        imagem: "assets/img/adorable_animals.svg",
        usuario: "adorable_animals",
        numero: "99.159",
      },
    },
  ];

  return (
    <div class="posts">
      {postsArray.map((post) => {
        return (
          <Post
            usuario={post.usuario}
            icone={post.icone}
            imagem={post.imagemPost}
            curtidasImg={post.curtidas.imagem}
            curtidasUsuario={post.curtidas.usuario}
            curtidasNumero={post.curtidas.numero}
          />
        );
      })}
    </div>
  );
}