import { Link } from "react-router-dom";
import CardMenu from "../../../components/CardMenu";
import useItemsRoute from "../hook/useItemsRoute";
export default function MenuReport() {
  const items = useItemsRoute();

  return (
    <div className="w-full h-32 flex justify-between items-center px-6">
      {items.map((item, index) => (
        <Link key={index} to={item.path}>
          <CardMenu title={item.title} Icon={item.Icon} active={item.active} />
        </Link>
      ))}
    </div>
  );
}
