import type React from "react";
import type { ImgHTMLAttributes } from "react";

type AvatarSize = "smaller" | "small" | "medium" | "large";
type AvatarDirection = "row" | "column";
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: AvatarSize;
  title?: string;
  direction?: AvatarDirection;
  subtitle?: string;
  showFallback?: boolean;
}

const Avatar = ({
  className = "",
  size = "medium",
  title,
  direction = "row",
  subtitle,
  showFallback = true,
  src,
  alt = "User",
  ...props
}: AvatarProps) => {
  const getFallbackSrc = () => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(
      title || alt,
    )}&background=random&color=fff`;
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (showFallback) {
      const target = e.target as HTMLImageElement;
      target.src = getFallbackSrc();
    }
  };

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
        <div
          className={`flex ${direction === "row" ? "flex-row items-center" : "flex-col justify-start"} text-white font-medium text-sm`}
        >
          <p className="text-white font-medium">{title}</p>
          {subtitle && (
            <span className={`block text-zinc-400 text-xs ${direction === "row" ? "ml-1" : ""}`}>
              {direction === "row" ? "•" : ""} {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Avatar;
