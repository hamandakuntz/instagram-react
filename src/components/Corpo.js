import RenderSidebar from "./Sidebar";
import RenderStories from "./Stories";
import RenderPosts from "./Posts";

export default function RenderCorpo() {
  return (
    <div class="corpo">
      <div class="esquerda">
        <RenderStories />
        <RenderPosts />
      </div>
      <RenderSidebar imagem= "assets/img/catanacomics.svg" 
      usuario="catanacomics" 
      nome="Catana"/>
    </div>
  );
}
