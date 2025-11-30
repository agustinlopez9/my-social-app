import Button from "./ui/Button";
import TextArea from "./ui/TextArea";

const NewPost = () => {
  return (
    <div className="bg-zinc-700 rounded-sm p-4 border border-zinc-600 m-2 mb-8">
      <p className="text-white font-semibold mb-3">Crear una publicación</p>
      <TextArea name="post" placeholder="Comparte algo nuevo..." />
      <div className="flex justify-end mt-3">
        <Button>Publicar</Button>
      </div>
    </div>
  );
};

export default NewPost;
