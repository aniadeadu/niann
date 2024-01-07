import { Children, useContext, useEffect, useState } from "react";
import { ModalUI } from "../ui/Modal";
import { ModalContext } from "../../contexts/ModalsProvider";
import { Start_menu } from "../menu/Start_menu";
import { W_menu } from "../menu/W_menu";

export const MenuUI = ({ children, sha }) => {
  const { navbar_menu, setNavBar_menu } = useContext(ModalContext);
  const { w_menu, setW_menu } = useContext(ModalContext);
  const { sub_menu, setSub_menu } = useContext(ModalContext);
  const { currentIndex, setCurrentIndex } = useContext(ModalContext);

  const [navbar_menu_style, setNavBar_menu_style] = useState();

  useEffect(() => {
    if (navbar_menu === false) {
      setNavBar_menu_style(
        " bg-transparent relative top-0 -right-[7rem] transition-all duration-300 "
      );
    } else {
      setNavBar_menu_style(
        " text-white font-medium pl-12 pr-8 py-8 w-[100%] sm:w-[95%] md:w-[80%] lg:w-[40%]  right-0 bg-transparent absolute top-0  transition-all duration-300 "
      );
    }
  }, [navbar_menu, navbar_menu_style]);

  const Sub_menu = (index) => {
    return <div className="w-[100%]"> {sub_menu[index]}</div>;
  };

  const style = () => {
    if (window.innerWidth >= 1024) {
      return {
        transform: `translateX(${-currentIndex * 40}vw)`,
        transition: "transform ease 0.3s",
      };
    }
    if (window.innerWidth >= 640 && window.innerWidth < 748) {
      return {
        transform: `translateX(${-currentIndex * 95}vw)`,
        transition: "transform ease 0.3s",
      };
    }
    if (window.innerWidth >= 748) {
      return {
        transform: `translateX(${-currentIndex * 80}vw)`,
        transition: "transform ease 0.3s",
      };
    } else {
      return {
        transform: `translateX(${-currentIndex * 100}vw)`,
        transition: "transform ease 0.3s",
      };
    }
  };

  return (
    navbar_menu && (
      <ModalUI navbar_menu_style={navbar_menu_style}>
        <div
          className="w-[300%] h-full flex space-x-56 overflow-x-hidden"
          style={style()}
        >
          {sub_menu.map((_, index) => (
            <div className="basis-[100%] flex-1">{Sub_menu(index)}</div>
          ))}
        </div>
      </ModalUI>
    )
  );
};
