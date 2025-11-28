interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

const Avatar = ({ className = "", title, subtitle, ...props }: AvatarProps) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <img
        className={`rounded-full w-8 h-8 ${className}`}
        {...props}
      />
      <div className="flex flex-col text-sm">
        {title && <p className="text-white">{title}</p>}
        {subtitle && <p className="text-xs text-zinc-400">{subtitle}</p>}
      </div>
    </div>
  );
};

export default Avatar;