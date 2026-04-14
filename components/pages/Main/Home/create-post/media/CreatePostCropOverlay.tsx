import { Check } from "lucide-react";
import Cropper, { Area, Point } from "react-easy-crop";

type CreatePostCropOverlayProps = {
  image: string;
  crop: Point;
  zoom: number;
  onCropChange: (point: Point) => void;
  onCropComplete: (area: Area, pixels: Area) => void;
  onZoomChange: (zoom: number) => void;
  onDone: () => void;
};

export default function CreatePostCropOverlay({
  image,
  crop,
  zoom,
  onCropChange,
  onCropComplete,
  onZoomChange,
  onDone,
}: CreatePostCropOverlayProps) {
  return (
    <div className="absolute inset-0 z-20 bg-black">
      <Cropper
        image={image}
        crop={crop}
        zoom={zoom}
        aspect={1}
        onCropChange={onCropChange}
        onCropComplete={onCropComplete}
        onZoomChange={onZoomChange}
      />
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/80 p-2 rounded-full backdrop-blur-md">
        <span className="text-xs font-bold pl-2 text-white">Zoom</span>
        <input
          type="range"
          value={zoom}
          min={1}
          max={3}
          step={0.1}
          onChange={(event) => onZoomChange(Number(event.target.value))}
          className="w-32 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-primary"
        />
        <button
          onClick={onDone}
          className="p-2 bg-primary hover:bg-primary-hover rounded-full text-white"
        >
          <Check className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
