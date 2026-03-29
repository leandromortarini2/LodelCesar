import { Link } from "react-router-dom";
import type { RoutesNavBar } from "../../../interfaces/RoutesNavBar";
import Button from "../CustomeButton";
import { Link as LinkScroll } from "react-scroll";

interface Props {
  routes: RoutesNavBar[];
  scroll?: boolean;
}

export default function PanelButton({ routes, scroll }: Props) {
  return (
    <nav className="flex justify-evenly items-center  text-sm w-full">
      {scroll
        ? routes.map(({ url, text }) => (
            <LinkScroll key={url} to={url} smooth duration={500}>
             <button className="btn btn-ghost text-default-text hover:bg-colorDos border-none shadow-none">{text}</button>
            </LinkScroll>
          ))
        : routes.map(({ url, text }) => (
            <Link key={url} to={url}>
              <Button
                text={text}
                width="2lx:min-w-[140px]"
                claseButton="secondary"
              />
            </Link>
          ))}
    </nav>
  );
}
