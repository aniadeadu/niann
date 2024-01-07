import { useContext, useEffect, useState } from "react";
import search from "../../assets/svgs/search.svg";
import { InputUI } from "../ui/Input";
import { ModalUI } from "../ui/Modal";
import { ModalContext } from "../../contexts/ModalsProvider";
import { bagImages, bags } from "../../data/Search/search_product_links/bags";
import { w_bags } from "../../data/Products/women/w_bags";
import { all_products_links } from "../../data/Search/all_products_links";
import { all_products } from "../../data/Products/all_products";
import { useNavigate } from "react-router-dom";

export const SearchUI = () => {
  const navigate = useNavigate();
  const { navbar_search, setNavBar_search } = useContext(ModalContext);
  const [navbar_search_style, setNavbar_search_style] = useState("");
  const [word, setWord] = useState("");
  const [searched_link, setSearched_link] = useState("");
  const [searched_image, setSearched_image] = useState("");

  useEffect(() => {
    if (navbar_search === false) {
      setNavbar_search_style(
        " bg-transparent absolute top-0 -right-[7rem] transition-all duration-300 "
      );
    } else {
      setNavbar_search_style(
        " font-medium pl-12 pr-8 py-8 w-[100%] lg:w-[45%] right-0 lg:right-[7rem] bg-transparent absolute top-0  transition-all duration-300 "
      );
    }
  }, [navbar_search, navbar_search_style]);

  let search_product_links;
  let search_products;

  search_product_links = (word, links) => {
    const regExp = new RegExp(word, "gi");
    return all_products_links.filter((product_link) => {
      return product_link.Name.match(regExp);
    });
  };
  search_products = (word, images) => {
    const regExp = new RegExp(word, "gi");
    return all_products
      .filter((product) => {
        return product.image.match(regExp);
      })
      .slice(1, 7);
  };

  const handleSearch = () => {
    const searched_product_link = search_product_links(
      word,
      all_products_links
    );
    const searched_product = search_products(word, all_products);

    setSearched_link(
      searched_product_link.map((product_link) => {
        console.log(product_link.Link);
        return (
          <div className="flex gap-1">
            <div className="">
              <img src={search} alt="search icon" />
            </div>
            <div
              className="text-black cursor-pointer font-Josefin"
              onClick={() => {
                navigate(product_link.Link);
                setNavBar_search(false);
              }}
            >
              {product_link.Name}
            </div>
          </div>
        );
      })
    );

    setSearched_image(
      searched_product.map((product) => {
        return (
          <div
            className="basis-[25%] cursor-pointer"
            onClick={() => {
              navigate(
                product.id.toString().includes("312150")
                  ? `/shopping/women/wears/dresses/${product.id}`
                  : product.id.toString().includes("312150")
                  ? `/shopping/women/wears/skirts/${product.id}`
                  : product.id.toString().includes("312150")
                  ? `/shopping/women/wears/coats/${product.id}`
                  : product.id.toString().includes("312150")
                  ? `/shopping/women/wears/tops/${product.id}`
                  : product.id.toString().includes("312150")
                  ? `/shopping/women/wears/jackets/${product.id}`
                  : product.id.toString().includes("312150")
                  ? `/shopping/women/wears/trousers/${product.id}`
                  : product.id.toString().includes("312151")
                  ? `/shopping/men/wears/trousers/${product.id}`
                  : product.id.toString().includes("312151")
                  ? `/shopping/men/wears/blousons/${product.id}`
                  : product.id.toString().includes("312151")
                  ? `/shopping/men/wears/jackets/${product.id}`
                  : product.id.toString().includes("198150")
                  ? `/shopping/women/shoes/${product.alt}/${product.id}`
                  : product.id.toString().includes("198151")
                  ? `/shopping/men/shoes/${product.alt}/${product.id}`
                  : product.id.toString().includes("2170")
                  ? `/shopping/women/bags/${product.alt}/${product.id}`
                  : ""
              );
              setNavBar_search(false);
            }}
          >
            <img
              src={product.image}
              alt={product.alt}
              className="object-contain h-auto bg-[rgba(230,230,230,.45)] rounded-md cursor-pointer"
            />
          </div>
        );
      })
    );
  };

  return (
    navbar_search && (
      <ModalUI navbar_search_style={"  scroll-smooth " + navbar_search_style}>
        <div className="w-full pl-6 pr-8">
          <InputUI
            className={
              "bg-transparent w-[85%] border py-1 px-1 font-Josefin outline-none border-[rgba(0,0,0,.95)] rounded-md text-black focus:outline-none"
            }
            type={"search"}
            placeholder={"what are you looking for"}
            value={word}
            onChange={(e) => {
              setWord(e.target.value);
              handleSearch();
            }}
            required={false}
          />
        </div>

        <div className="flex justify-between pl-5 mt-7 w-full">
          <div className="flex-col ">{searched_link}</div>
          <div className="flex  h-[15rem] flex-wrap w-[65%] shrink-0  gap-3 ">
            {searched_image}
          </div>
        </div>
      </ModalUI>
    )
  );
};
