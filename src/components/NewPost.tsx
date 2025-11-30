import Button from "./ui/Button";

const NewPost = () => {
  return (
    <div className="bg-zinc-700 rounded-sm p-4 border border-zinc-600 m-2 mb-8">
      <p className="text-white font-semibold mb-3">Crear una publicación</p>
      <textarea
        className="w-full bg-zinc-600 text-white rounded-md p-3 min-h-24 resize-none border border-zinc-600 focus:border-orange-500 focus:outline-none placeholder:text-zinc-400"
        name="post"
        id="1"
        placeholder="Comparte algo nuevo..."
      />
      <div className="flex justify-end mt-3">
        <Button>Publicar</Button>
      </div>
    </div>
  );
}
 
export default NewPost;