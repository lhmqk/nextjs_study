import Image from "next/image";
export default function Testimonial(props: any) {
  const { imgSrc, name, role, message } = props;
  return (
    <div className="flex flex-col">
      <Image
        width={512}
        height={512}
        src={imgSrc}
        alt=""
        className="rounded-md mb-2 hover:filter hover:hue-rotate-90 transition-all duration-1000 ease-in-out hover:scale-75 hover:skew-x-6 h-[8rem] object-cover"
      />
      <div className="flex justify-between items-center">
        <a className="font-bold text-lg underline">{name}</a>
        <p className="opacity-50 text-right">{role}</p>
      </div>
      <p className="opacity-75 text-sm">{message}</p>
    </div>
  );
}
