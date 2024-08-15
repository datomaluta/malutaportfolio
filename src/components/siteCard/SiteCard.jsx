import { Link } from "react-router-dom";

const SiteCard = (props) => {
  return (
    <Link
      className="max-w-[21.875rem] w-full h-80 "
      to={`/project/${props.id}`}
    >
      <div className="bg-neutral-900 flex flex-col rounded overflow-hidden sm:w-full h-full">
        <div className="w-full h-60 overflow-hidden">
          <img
            src={props.imgsrc}
            alt="immmggg"
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
          />
        </div>
        <p className="text-white text-2xl py-2 flex-1 flex items-center px-2 hover:text-gray-300 font-bold">
          {props.name}
        </p>
      </div>
    </Link>
  );
};

export default SiteCard;
