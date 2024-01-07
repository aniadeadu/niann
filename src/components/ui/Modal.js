import { useContext, useEffect, useState } from "react";
import closeX from "../../assets/svgs/closeX.svg";

import { ModalContext } from "../../contexts/ModalsProvider";

export const ModalUI = ({
  navbar_menu_style,
  navbar_search_style,
  navbar_contact_style,
  children,
}) => {
  const { navbar_menu, setNavBar_menu } = useContext(ModalContext);
  const { navbar_search, setNavBar_search } = useContext(ModalContext);
  const { navbar_contact, setNavBar_contact } = useContext(ModalContext);

  return (
    <div className=" z-40  w-full h-screen top-0 right-0 left-0 bottom-0 fixed">
      <div className="w-full h-screen  right-0 backdrop-blur-lg top-0 left-0 bottom-0 fixed bg-[rgba(135,135,135,.25)]">
        <div
          className={
            " text-black pl-10 pr-8 py-8 bg-white  overflow-x-hidden " +
            navbar_menu_style +
            navbar_search_style +
            navbar_contact_style
          }
        >
          <div
            className=" flex justify-end mb-4 pr-6 cursor-pointer"
            onClick={() => {
              if (navbar_menu) {
                setNavBar_menu(false);
              }
              if (navbar_search) {
                setNavBar_search(false);
              }
              if (navbar_contact) {
                setNavBar_contact(false);
              }
            }}
          >
            <img
              src={closeX}
              alt="close"
              className="bg-white px-2 py-1 rounded-full "
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
