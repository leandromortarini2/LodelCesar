interface Props {
  title: string;
  Icon: React.ElementType;
  active?: boolean;
}

export default function CardMenu({ title, Icon, active = true }: Props) {
  return (
    <>
      {active ? (
        <div className="md:w-[170px] xl:w-[190px] px-3 h-[75px] bg-quintity text-white rounded-lg flex">
          <div className="w-3/4 h-full flex flex-col gap-1 justify-center ">
            <p className="text-xs  font-semibold">{title}</p>
          </div>
          <div className="w-1/4 flex justify-center items-center h-full">
            <Icon className=" text-2xl" />
          </div>
          <div></div>
        </div>
      ) : (
        <div className="md:w-[170px] xl:w-[190px] px-3 h-[75px] bg-white rounded-lg flex border-gray-primary border text-quintity ">
          <div className="w-3/4 h-full flex flex-col gap-1 justify-center ">
            <p className="text-xs font-semibold ">{title}</p>
          </div>
          <div className="w-1/4 flex justify-center items-center h-full">
            <Icon className=" text-2xl" />
          </div>
          <div></div>
        </div>
      )}
    </>
  );
}
