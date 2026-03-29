interface Props {
  textOne: string;
  textTwo: string;
  children?: React.ReactNode;
  widht?: string;
  widhtText?: string;
}

export default function CardDNI({ children, textOne, textTwo, widht }: Props) {
  return (
    <div
      className={` ${
        widht ? widht : "w-[500px]"
      } border-lg border bg-white border-gray-300 rounded-2xl shadow p-8 flex flex-col justify-center items-center gap-5`}
    >
      <div className={`w-[450px]  text-default-text   2xl:text-lg `}>
        <p className="text-sm ">{textOne}</p>
        <p className=" text-sm ">{textTwo}</p>
      </div>{" "}
      {children}
    </div>
  );
}
