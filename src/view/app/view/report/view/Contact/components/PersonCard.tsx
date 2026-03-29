import IconTextComponent from "../../../../../components/IconTextComponent";
import CustomeTitle from "../../../../../components/CustomeTitle";
import usePersonFormat from "../hook/usePersonFormat";

export default function PersonCard() {
  const items = usePersonFormat();

  return (
    <div className="md:w-1/4 xl:w-96 h-[340px] border border-gray-secondary rounded-lg p-5 flex flex-col gap-4">
      <CustomeTitle
        title="Datos Personales"
        type="h5"
        font="semibold"
        color="text-secondary"
      />

      <div className="flex flex-col gap-4">
        {items.map((item, index) => (
          <IconTextComponent
            key={index}
            size="xs"
            iconSize="sm"
            text={`${item.title}: ${item.value}`}
            Icon={item.Icon}
          />
        ))}
      </div>
    </div>
  );
}
