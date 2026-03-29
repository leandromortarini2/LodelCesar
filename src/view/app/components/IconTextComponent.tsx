interface Prop {
  text: string;
  Icon: React.ElementType;
  size?: "xs" | "sm" | "md" | "lg";
  iconSize?: "sm" | "md" | "lg" | "xl";
}

export default function IconTextComponent({
  Icon,
  text,
  size = "md",
  iconSize = "md",
}: Prop) {
  return (
    <div className="flex gap-1 justify-start  items-center">
      <Icon
        className={`text-primary 
          ${iconSize === "sm" && "text-sm h-5 w-5"} 
          ${iconSize === "md" && "text-base h-7 w-7"} 
          ${iconSize === "lg" && "text-lg h-10 w-9"}
          ${iconSize === "xl" && "text-xl h-12 w-11"}`}
      />
      <p
        className={`
          ${size === "xs" && "text-xs"} 
          ${size === "sm" && "text-sm"} 
          ${size === "md" && "text-base"} 
          ${size === "lg" && "text-lg"}`}
      >
        {text}
      </p>
    </div>
  );
}
