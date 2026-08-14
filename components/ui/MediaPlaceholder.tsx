type Props = {
  label: string;
  mediaType?: "photo" | "video" | "logo";
  aspectRatio?: string;
  className?: string;
  index?: string;
};

export function MediaPlaceholder({ label, mediaType = "photo", aspectRatio = "16 / 10", className = "", index = "FLP—MEDIA" }: Props) {
  return (
    <div className={`media-placeholder ${className}`} style={{ aspectRatio }} role="img" aria-label={`${label} ${mediaType} placeholder`}>
      <span className="corner corner-a" aria-hidden="true" />
      <span className="corner corner-b" aria-hidden="true" />
      <span className="media-index">{index}</span>
      <span className="media-label">[{label}]</span>
      <span className="media-type">{mediaType.toUpperCase()} / ASSET PENDING</span>
    </div>
  );
}

