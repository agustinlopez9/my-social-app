import { useTranslation } from "react-i18next";

type Size = "small" | "medium" | "large";

const sizeValues = {
  small: {
    strokeWidth: 2,
    size: 24,
  },
  medium: {
    strokeWidth: 3,
    size: 32,
  },
  large: {
    strokeWidth: 4,
    size: 48,
  },
};

interface LoadingIndicatorProps {
  loadingMessage?: string;
  showMessage?: boolean;
  size?: Size;
}

const LoadingIndicator = ({ loadingMessage, showMessage = true, size = "large" }: LoadingIndicatorProps) => {
  const { t } = useTranslation();
  const strokeWidth = sizeValues[size].strokeWidth;
  const sizeValue = sizeValues[size].size;
  const radius = (sizeValues[size].size - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const indicatorLength = circumference * 0.1;
  const borderLength = circumference * 0.9;

  return (
    <div className="flex flex-col items-center">
      <svg
        width={sizeValue}
        height={sizeValue}
        className="animate-spin"
        viewBox={`0 0 ${sizeValue} ${sizeValue}`}
      >
        {/* Main circle */}
        <circle
          cx={sizeValue / 2}
          cy={sizeValue / 2}
          r={radius}
          stroke="oklch(47% 0.157 37.304)"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={`${borderLength} ${indicatorLength}`}
          strokeDashoffset={0}
          strokeLinecap="butt"
        />
        {/* Small portion of the circle */}
        <circle
          cx={sizeValue / 2}
          cy={sizeValue / 2}
          r={radius}
          stroke="oklch(64.6% 0.222 41.116)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={`${indicatorLength} ${borderLength}`}
          strokeDashoffset={-borderLength}
          strokeLinecap="butt"
        />
      </svg>
      {showMessage ? <p className="mt-2 text-white">{loadingMessage || t("loading.copy.default")}</p> : null}
    </div>
  );
};

export default LoadingIndicator;
