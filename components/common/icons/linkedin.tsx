import Image from "next/image";

type Props = {
  onClick: () => void;
};

export default function LinkedInIcon({ onClick }: Props) {
  return (
    <div className={`flex flex-col items-center justify-center`}>
      <Image
        onClick={onClick}
        src="/assets/linkedin.svg"
        width="250"
        height="113"
        className="h-[4vh] w-[4vw] cursor-pointer sm:h-[9vh] sm:w-[9vw]"
        alt="empty state"
        priority
        sizes="250px"
      />
    </div>
  );
}
