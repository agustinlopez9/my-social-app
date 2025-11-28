const NewPost = () => {
  return (
    <div className="bg-zinc-700 rounded-lg p-4 shadow-lg border border-zinc-600 m-2 mb-8">
      <p className="text-white font-semibold mb-3">Crear una publicación</p>
      <textarea
        className="w-full bg-zinc-600 text-white rounded-md p-3 min-h-24 resize-none border border-zinc-600 focus:border-orange-500 focus:outline-none placeholder:text-zinc-400"
        name="post"
        id="1"
        placeholder="Comparte algo nuevo..."
      />
      <div className="flex justify-end mt-3">
        <button className="bg-orange-600 hover:bg-orange-700 cursor-pointer text-white font-medium px-6 py-2 rounded-md transition-colors duration-200">
          Publicar
        </button>
      </div>
    </div>
  );
}
 
export default NewPost;