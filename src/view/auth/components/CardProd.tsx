export default function CardProd({ producto }: any) {
  const { nombre, descripcion, precio, img } = producto;
  return (
    <div className="card bg-base-100 flex-1 shadow-sm">
      <figure>
        <img
          src={
            img ||
            "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp "
          }
          alt={nombre}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{nombre}</h2>
        <p>{descripcion}</p>
        <p className="font-semibold">${precio}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary border-none shadow-sm   text-default-text bg-colorUno">
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
