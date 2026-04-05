import { social } from "../../../utils/routesNavBar";

export default function EmpresasIcons({ handleRedirectSocial }: any) {
  return (
    <div className="w-[80%] h-16 gap-5 flex justify-center items-center px-5">
      {social?.map((route, i) => {
        const Icon = route.icon;
        return (
          <div
            key={i}
            onClick={() => handleRedirectSocial(route)}
            className="hover:cursor-pointer"
          >
            <Icon className={`w-7 lg:w-8 h-7 lg:h-8 ${route.colorIcon}`} />
          </div>
        );
      })}
    </div>
  );
}
