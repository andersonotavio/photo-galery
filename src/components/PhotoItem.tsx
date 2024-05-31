import { Photo } from "@/types/Photo";

type Props = {
  photo: Photo;
  onClick: () => void;
};

export const PhotoItem = ({ photo, onClick }: Props) => {
  return (
    <div className="cursor-pointer hover:opacity-80">
      <img
        onClick={onClick}
        src={`/photo/${photo.url}`}
        alt=""
        className="w-full h-full"
      />
    </div>
  );
};
