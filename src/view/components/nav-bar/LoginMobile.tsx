import FormLogin from "../../auth/components/FormLogin";

interface Props {
  onSubmit: () => void;
  closeModal: () => void;
}

export default function LoginMobile({ onSubmit, closeModal }: Props) {
  return (
    <div className="flex flex-col gap-5 2xl:gap-12 justify-center h-full">
      <div className="w-full flex justify-center ">
        <h2 className="text-lg  font-semibold">Ingreso de Socios</h2>
      </div>
      <FormLogin onSubmit={onSubmit} closeModal={closeModal} />
      <p className="text-error text-sm font-semibold text-center cursor-pointer hover:text-error/80">
        Olvidé mi contraseña
      </p>
      <div className="flex justify-center">
        <img src="/logos/logoDrawer.png" alt="" className="w-24" />
      </div>{" "}
    </div>
  );
}
