interface Prop {
  title: string;
  type: "h1" | "h2" | "h3" | "h4" | "h5";
  color?: string;
  font: "light" | "regular" | "medium" | "semibold" | "bold";
}

export default function CustomeTitle({ title, type, color, font }: Prop) {
  return (
    <>
      {type === "h1" && (
        <h1
          className={`text-3xl tracking-wide  ${
            color ? color : "text-default-text"
          }  
            ${
              font === "light"
                ? "font-light"
                : font === "regular"
                ? "font-regular"
                : font === "medium"
                ? "font-medium"
                : font === "semibold"
                ? "font-semibold"
                : "font-bold"
            }
            `}
        >
          {title}
        </h1>
      )}
      {type === "h2" && (
        <h2
          className={`text-2xl  tracking-wide ${
            color ? color : "text-default-text"
          }
          ${
            font === "light"
              ? "font-light"
              : font === "regular"
              ? "font-regular"
              : font === "medium"
              ? "font-medium"
              : font === "semibold"
              ? "font-semibold"
              : "font-bold"
          } `}
        >
          {title}
        </h2>
      )}
      {type === "h3" && (
        <h3
          className={`text-xl  tracking-wide ${
            color ? color : "text-default-text"
          } ${
            font === "light"
              ? "font-light"
              : font === "regular"
              ? "font-regular"
              : font === "medium"
              ? "font-medium"
              : font === "semibold"
              ? "font-semibold"
              : "font-bold"
          }`}
        >
          {title}
        </h3>
      )}
      {type === "h4" && (
        <h4
          className={`text-lg  tracking-wide ${
            color ? color : "text-default-text"
          } ${
            font === "light"
              ? "font-light"
              : font === "regular"
              ? "font-regular"
              : font === "medium"
              ? "font-medium"
              : font === "semibold"
              ? "font-semibold"
              : "font-bold"
          }`}
        >
          {title}
        </h4>
      )}
      {type === "h5" && (
        <h4
          className={`text-base  tracking-wide ${
            color ? color : "text-default-text"
          } ${
            font === "light"
              ? "font-light"
              : font === "regular"
              ? "font-regular"
              : font === "medium"
              ? "font-medium"
              : font === "semibold"
              ? "font-semibold"
              : "font-bold"
          }`}
        >
          {title}
        </h4>
      )}
    </>
  );
}
