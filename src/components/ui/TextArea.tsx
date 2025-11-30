interface TextAreaProps {
  name: string;
  placeholder?: string;
}

const TextArea = ({ name, placeholder }: TextAreaProps) => {
  return (
    <textarea
      className="w-full bg-zinc-600 text-white rounded-md p-3 min-h-24 resize-none border border-zinc-600 focus:border-orange-500 focus:outline-none placeholder:text-zinc-400"
      name={name}
      placeholder={placeholder || "Escribe algo aquí..."}
    />
  );
};

export default TextArea;
