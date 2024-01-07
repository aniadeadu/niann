import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../contexts/ModalsProvider";
import { ModalUI } from "../ui/Modal";

export const ContactUI = () => {
  const { navbar_contact, setNavBar_contact } = useContext(ModalContext);
  const [navbar_contact_style, setNavBar_contact_style] = useState();

  useEffect(() => {
    if (navbar_contact === false) {
      setNavBar_contact_style(
        " bg-transparent absolute top-0 -left-[7rem] transition-all duration-300 "
      );
    } else {
      setNavBar_contact_style(
        " text-black font-medium pl-12 pr-8 py-8 w-[100%] sm:w-[95%] md:w-[80%] lg:w-[30%]  left-0 bg-transparent absolute top-0  transition-all duration-300 "
      );
    }
  }, [navbar_contact, navbar_contact_style]);

  return (
    navbar_contact && (
      <ModalUI navbar_contact_style={navbar_contact_style}>
        <p className="font-medium">Email us:</p>
        <a href="mailto:aniadeadu@example.com" className="underline">
          aniadeadu@gmail.com
        </a>
      </ModalUI>
    )
  );
};
