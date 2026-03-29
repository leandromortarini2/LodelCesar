import { IoIosArrowForward } from "react-icons/io";
import Button from "../../components/CustomeButton";

interface Props {
  title: string;
  description: string;
  textButton: string;
  positionImage: "left" | "right";
  image: string;
  background?: string;
  onclick?: () => void;
}

export default function SplitLayoutSection({
  title,
  description,
  textButton,
  positionImage,
  image,
  background,
  onclick,
}: Props) {
  return (
    <section
      className={`w-full min-h-screen lg:h-screen flex justify-center items-center py-10 lg:py-20 ${background}`}
    >
      <div className="flex flex-col lg:flex-row w-full md:w-[700px] lg:w-[1200px] h-full px-6 lg:px-10 items-center gap-6 lg:items-start">
        <div
          className={`w-full lg:w-1/2 lg:h-[650px] flex justify-center items-center 
            order-1 
            ${positionImage === "left" ? "lg:order-1" : "lg:order-2"}`}
        >
          <img
            src={image}
            alt={title}
            className="w-full md:w-3/4 object-contain"
          />
        </div>

        <div
          className={`w-full md:1/2 lg:w-1/2 lg:h-[650px] flex flex-col justify-center items-start gap-5 lg:gap-8 
            order-2 
            ${positionImage === "left" ? "lg:order-2" : "lg:order-1"}`}
        >
          <h1 className="text-2xl lg:text-3xl font-semibold text-primary  lg:text-left">
            {title || "Introducción"}
          </h1>
          <p className="tracking-wide  lg:text-left">
            {description || "Descripción"}
          </p>
          <Button
            onClick={onclick}
            text={textButton || "Empezar Ahora"}
            claseButton="primary"
            Icon={IoIosArrowForward}
            positionIcon="right"
          />
        </div>
      </div>
    </section>
  );
}
