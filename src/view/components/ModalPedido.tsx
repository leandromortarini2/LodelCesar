import { useEffect, useRef, useState } from "react";
import CustomeButton from "./CustomeButton";
import { Modal } from "../app/components/Modal";

export interface OrderFormData {
  nombre: string;
  direccion: string;
  hora: string;
}

interface IProps {
  onConfirm: (data: OrderFormData) => void;
  onClose: () => void;
}

export const ModalPedido = ({ onConfirm, onClose }: IProps) => {
  const [formData, setFormData] = useState<OrderFormData>({
    nombre: "",
    direccion: "",
    hora: "",
  });
  const [errors, setErrors] = useState<Partial<OrderFormData>>({});

  const nombreRef = useRef<HTMLInputElement>(null);
  const direccionRef = useRef<HTMLInputElement>(null);
  const horaRef = useRef<HTMLInputElement>(null);
  const confirmRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    nombreRef.current?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof OrderFormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    next: React.RefObject<HTMLInputElement | HTMLButtonElement | null>,
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      next.current?.focus();
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<OrderFormData> = {};
    if (!formData.nombre.trim()) newErrors.nombre = "Ingresá tu nombre";
    if (!formData.direccion.trim())
      newErrors.direccion = "Ingresá tu dirección";
    if (!formData.hora.trim()) newErrors.hora = "Ingresá la hora de entrega";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirm = () => {
    if (!validate()) return;
    onConfirm(formData);
  };

  const inputClass = (field: keyof OrderFormData) =>
    `w-full border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40 bg-white ${
      errors[field] ? "border-red-400" : "border-colorBorder"
    }`;

  return (
    <Modal
      title="Datos de entrega"
      close={onClose}
      buttonClose
      modalWidth="w-full max-w-md"
    >
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-600">
            Nombre y apellido
          </label>
          <input
            ref={nombreRef}
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, direccionRef)}
            placeholder="Ej: Juan Pérez"
            className={inputClass("nombre")}
          />
          {errors.nombre && (
            <p className="text-xs text-red-500">{errors.nombre}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-600">
            Dirección de entrega
          </label>
          <input
            ref={direccionRef}
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, horaRef)}
            placeholder="Ej: Av. Corrientes 1234"
            className={inputClass("direccion")}
          />
          {errors.direccion && (
            <p className="text-xs text-red-500">{errors.direccion}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-600">
            Hora de entrega
          </label>
          <input
            ref={horaRef}
            name="hora"
            type="time"
            value={formData.hora}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, confirmRef)}
            className={inputClass("hora")}
          />
          {errors.hora && <p className="text-xs text-red-500">{errors.hora}</p>}
        </div>

        <div className="flex gap-3 pt-2">
          <CustomeButton
            claseButton="secondary"
            text="Cancelar"
            onClick={onClose}
            containerClass="w-full"
            width="w-full"
            height="h-11"
            border
          />
          <CustomeButton
            claseButton="primary"
            text="Confirmar pedido"
            onClick={handleConfirm}
            containerClass="w-full"
            width="w-full"
            height="h-11"
            color="bg-btn-wp"
            hover="hover:bg-btn-wp/90"
            refButton={confirmRef}
          />
        </div>
      </div>
    </Modal>
  );
};
