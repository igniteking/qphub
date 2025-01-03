import Link from "next/link";
import { Fragment } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function Menuloop({
  MenuItems,
  toggleSidemenu,
  level,
  HoverToggleInnerMenuFn,
}: any) {
  const handleClick = (event: any) => {
    // Your logic here
    event.preventDefault(); // Prevents the default anchor behavior (navigation)
    // ... other logic you want to perform on click
  };

  return (
    <Fragment>
      <Link
        href="#!"
        scroll={false}
        className={`side-menu__item active`}
        onClick={(event) => {
          event.preventDefault();
          // toggleSidemenu(event, MenuItems);
        }}
        // onMouseEnter={(event) => HoverToggleInnerMenuFn(event, MenuItems)}
      >
        <i className="ri-arrow-down-s-line side-menu__angle"></i>
        <OverlayTrigger
          placement="right"
          overlay={<Tooltip id="button-tooltip">Dashboard</Tooltip>}
        >
          <div className="d-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="side-menu__icon"
              width="32"
              height="32"
              viewBox="0 0 256 256"
            >
              <path
                d="M216,115.54V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.54a8,8,0,0,1,2.62-5.92l80-75.54a8,8,0,0,1,10.77,0l80,75.54A8,8,0,0,1,216,115.54Z"
                opacity="0.2"
              ></path>
              <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path>
            </svg>
          </div>
        </OverlayTrigger>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="side-menu__icon"
          width="32"
          height="32"
          viewBox="0 0 256 256"
        >
          <path
            d="M216,115.54V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.54a8,8,0,0,1,2.62-5.92l80-75.54a8,8,0,0,1,10.77,0l80,75.54A8,8,0,0,1,216,115.54Z"
            opacity="0.2"
          ></path>
          <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path>
        </svg>

        <span className={"side-menu__label"}>
          {" "}
          Dashboard{" "}
          <span className="badge bg-secondary ms-2 shadow-secondary">3 </span>
        </span>
      </Link>
      <ul
        className={`slide-menu child${level}  ${
          MenuItems.active ? "double-menu-active" : ""
        } ${MenuItems?.dirchange ? "force-left" : ""} `}
        style={MenuItems.active ? { display: "block" } : { display: "none" }}
      >
        {level <= 1 ? (
          <li className="slide side-menu__label1">
            <Link href="#!" scroll={false}>
              {MenuItems.title}
            </Link>
          </li>
        ) : (
          ""
        )}
        {MenuItems.children.map((firstlevel: any, index: any) => (
          <li
            className={`${firstlevel.menutitle ? "slide__category" : ""} ${
              firstlevel?.type == "empty" ? "slide" : ""
            } ${firstlevel?.type == "link" ? "slide" : ""} ${
              firstlevel?.type == "sub" ? "slide has-sub" : ""
            } ${firstlevel?.active ? "open" : ""} ${
              firstlevel?.selected ? "active" : ""
            }`}
            key={index}
          >
            {firstlevel.type === "link" ? (
              <Link
                href={firstlevel.path}
                className={`side-menu__item ${
                  firstlevel.selected ? "active" : ""
                }`}
              >
                {firstlevel.icon}
                <span className="">
                  {" "}
                  {firstlevel.title}{" "}
                  {firstlevel.badgetxt ? (
                    <span className={firstlevel.class}>
                      {" "}
                      {firstlevel.badgetxt}
                    </span>
                  ) : (
                    ""
                  )}
                </span>
              </Link>
            ) : (
              ""
            )}
            {firstlevel.type === "empty" ? (
              <Link href="#!" className="side-menu__item" onClick={handleClick}>
                {" "}
                {firstlevel.icon}
                <span className="">
                  {" "}
                  {firstlevel.title}{" "}
                  {firstlevel.badgetxt ? (
                    <span className={firstlevel.class}>
                      {" "}
                      {firstlevel.badgetxt}{" "}
                    </span>
                  ) : (
                    ""
                  )}
                </span>
              </Link>
            ) : (
              ""
            )}
            {firstlevel.type === "sub" ? (
              <Menuloop
                MenuItems={firstlevel}
                toggleSidemenu={toggleSidemenu}
                HoverToggleInnerMenuFn={HoverToggleInnerMenuFn}
                level={level + 1}
              />
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default Menuloop;
