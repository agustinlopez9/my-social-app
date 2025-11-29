import type { ImgHTMLAttributes } from "react";

type AvatarSize = "small" | "medium" | "large";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: AvatarSize;
  title?: string;
  subtitle?: string;
  showFallback?: boolean;
}

const Avatar = ({
  className = "",
  size = "medium",
  title,
  subtitle,
  showFallback = true,
  src,
  alt = "User",
  ...props
}: AvatarProps) => {
  const getFallbackSrc = () => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(
      title || alt
    )}&background=random&color=fff`;
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (showFallback) {
      const target = e.target as HTMLImageElement;
      target.src = getFallbackSrc();
    }
  };

  // Use fallback if no src is provided
  const imageSrc = src || (showFallback ? getFallbackSrc() : undefined);

  return (
    <div className="flex flex-row gap-2 items-center">
      <img
        src={imageSrc}
        alt={alt}
        className={`avatar avatar-${size} ${className}`}
        onError={handleImageError}
        {...props}
      />
      {(title || subtitle) && (
        <div className="flex flex-col text-sm">
          {title && <p className="text-white font-medium">{title}</p>}
          {subtitle && <p className="text-xs text-zinc-400">{subtitle}</p>}
        </div>
      )}
    </div>
  );
};

export default Avatar;
