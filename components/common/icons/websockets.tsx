import Image from "next/image";

export default function WebsocketsIcon() {
  return (
    <div className={`flex flex-col items-center justify-center`}>
      <Image
        src="/assets/websockets-icon.svg"
        width="250"
        height="113"
        className="h-[7vh] w-[7vw]"
        alt="empty state"
        priority
        sizes="250px"
      />
    </div>
  );
}
