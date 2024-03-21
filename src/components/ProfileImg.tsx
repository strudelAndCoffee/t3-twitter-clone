import Image from "next/image";

type ProfileImgProps = {
  src?: string | null;
  className?: string;
};

export function ProfileImg({ src, className = "" }: ProfileImgProps) {
  return (
    <div
      className={`relative h-12 w-12 overflow-hidden rounded-full ${className}`}
    >
      {src == null ? null : (
        <Image src={src} alt="Profile Image" quality={100} fill />
      )}
    </div>
  );
}
