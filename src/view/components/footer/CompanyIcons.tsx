import { social } from "../../../utils/routesNavBar";

export default function EmpresasIcons({ handleRedirectSocial }: any) {
  return (
    <div className="w-full h-16 gap-4 flex justify-center items-center">
      {social?.map((route, i) => {
        const Icon = route.icon;
        return (
          <div
            key={i}
            onClick={() => handleRedirectSocial(route)}
            className="hover:cursor-pointer bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
          >
            <Icon className={`w-7 lg:w-8 h-7 lg:h-8 ${route.colorIcon}`} />
          </div>
        );
      })}
    </div>
  );
}
