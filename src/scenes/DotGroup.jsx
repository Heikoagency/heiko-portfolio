import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-orange before:absolute before:w-6 before:h-6 before:rounded-full
before:border-2 before: border-orange before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        className={`${selectedPage === "home" ? selectedStyles : "bg-dark-grey"}
       w-3 h-3 rounded-full`}
        href="#home"
        onClick={() => setSelectedPage("home")}
      ></AnchorLink>
      <AnchorLink
        className={`${
          selectedPage === "skills" ? selectedStyles : "bg-dark-grey"
        }
       w-3 h-3 rounded-full`}
        href="#skills"
        onClick={() => setSelectedPage("skills")}
      ></AnchorLink>
      <AnchorLink
        className={`${
          selectedPage === "progetti" ? selectedStyles : "bg-dark-grey"
        }
       w-3 h-3 rounded-full`}
        href="#progetti"
        onClick={() => setSelectedPage("progetti")}
      ></AnchorLink>
      <AnchorLink
        className={`${
          selectedPage === "testimonials" ? selectedStyles : "bg-dark-grey"
        }
       w-3 h-3 rounded-full`}
        href="#testimonials"
        onClick={() => setSelectedPage("testimonials")}
      ></AnchorLink>
      <AnchorLink
        className={`${
          selectedPage === "contatti" ? selectedStyles : "bg-dark-grey"
        }
       w-3 h-3 rounded-full`}
        href="#contatti"
        onClick={() => setSelectedPage("contatti")}
      ></AnchorLink>
    </div>
  );
};

export default DotGroup;
