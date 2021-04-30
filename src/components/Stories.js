import RenderStory from "./Story";

export default function RenderStories() {
  const storiesArray = [
    {
      storyImagem: "assets/img/9gag.svg",
      storyUsuario: "9gag",
    },
    {
      storyImagem: "assets/img/meowed.svg",
      storyUsuario: "meowed",
    },
    {
      storyImagem: "assets/img/barked.svg",
      storyUsuario: "barked",
    },
    {
      storyImagem: "assets/img/nathanwpylestrangeplanet.svg",
      storyUsuario: "nathanwpylestrangeplanet",
    },
    {
      storyImagem: "assets/img/wawawicomics.svg",
      storyUsuario: "wawawicomics",
    },
    {
      storyImagem: "assets/img/respondeai.svg",
      storyUsuario: "respondeai",
    },
    {
      storyImagem: "assets/img/filomoderna.svg",
      storyUsuario: "filomoderna",
    },
    {
      storyImagem: "assets/img/memeriagourmet.svg",
      storyUsuario: "memeriagourmet",
    },
  ];

  return (
    <div class="stories">
      {" "}
      {storiesArray.map((story) => {
        return (
          <RenderStory
            storyImagem={story.storyImagem}
            storyUsuario={story.storyUsuario}
          />
        );
      })}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
