export interface CategoryProps {
  categoria: Category;
  onClick: (cat: Category) => void;
}

export interface Category {
  id: string;
  label: string;
  img?: string;
}

export interface Product {
  nombre: string;
  descripcion: string;
  precio: string;
  img: string;
  categoria: string;
  id: number;
}
