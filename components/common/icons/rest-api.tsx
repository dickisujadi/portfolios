import Image from "next/image";

export default function RestAPIIcon() {
  return (
    <div className={`flex flex-col items-center justify-center`}>
      <Image
        src="/assets/rest-api-icon.svg"
        width="250"
        height="113"
        className="h-[10vh] w-[10vw]"
        alt="empty state"
        priority
        sizes="250px"
      />
    </div>
  );
}
