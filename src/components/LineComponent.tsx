interface LineProps {
  color?: "blueLight" | "primaryWhite" | "primaryGray" | "secondaryColor" | "primaryColor";
  width?: string;
  height?: string;
}

export const LineComponent = ({
  color = "blueLight",
  width = "w-[90%]",
  height = "h-1",
}: LineProps) => {
  
  // Mapeo de colores para asegurar que Tailwind detecte las clases
  const colorClasses = {
    blueLight: "bg-blueLight",
    primaryWhite: "bg-primaryWhite",
    primaryGray: "bg-primaryGray",
    secondaryColor: "bg-secondaryColor",
    primaryColor: "bg-primaryColor",
  };

  return (
    <div 
      className={`
        ${colorClasses[color]} 
        ${width} 
        ${height}
      `}
    />
  );
};