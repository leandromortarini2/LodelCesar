import { categories } from "../../../../../mocks/categories";
// import { products } from "../../../../../mocks/products";
// import CardProd from "../../../components/CardProd";
import { Element } from "react-scroll";
import CategoryCard from "../../../components/CategoryCard";

export default function Products() {
  return (
    <div className="w-full p-2">
      <Element name="intro-1" className="flex flex-col py-10 md:pt-0 gap-6">
        <h1 className="text-2xl lg:text-3xl font-semibold text-colorTres lg:text-left">
          Nuestros Platos
        </h1>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} categoria={cat} />
          ))}
        </div>
        {/* <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((item, index) => (
            <CardProd key={index} producto={item} />
          ))}
        </div> */}
      </Element>
    </div>
  );
}
