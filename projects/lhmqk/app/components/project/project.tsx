export default function Project(props: any) {
  const { imgSrc, title, category } = props;
  return (
    <div className="flex flex-col">
      <img
        src={imgSrc}
        alt=""
        className="rounded-md mb-2 hover:filter hover:hue-rotate-90 transition-all duration-1000 ease-in-out hover:scale-75 hover:skew-x-6"
      />
      <div className="flex justify-between items-center">
        <a className="font-bold text-lg underline">{title}</a>
        <p className="opacity-50 text-right">{category}</p>
      </div>
    </div>
  );
}
