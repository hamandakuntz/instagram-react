export default function RenderStory(props) {
  return (
    <>
      <div class="story">
        <div class="imagem">
          <img src= {props.storyImagem}/>
        </div>
        <div class="usuario">{props.storyUsuario}</div>
      </div>      
    </>
  );
}