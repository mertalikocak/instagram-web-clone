import SVG from "react-inlinesvg";
import Icon from "./Icon";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import classNames from "classnames";

function Search() {
  const [open, setOpen] = useState(false);
  return (
    <div className=" relative w-[268px] ">
      <span
        className={classNames({
          "pointer-events-none absolute top-0 left-0 flex h-9 w-9 items-center justify-center text-[#8e8e8e]": true,
          hidden: open,
        })}
      >
        <Icon name="search" />
      </span>
      <input
        type="text"
        placeholder="Search"
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="h-9 w-full rounded bg-[#efefef] pl-9 focus:pl-3"
      />
      <button
        className={classNames({
          "absolute right-0 top-0 hidden  h-9 w-9 items-center justify-center text-[#c7c7c7]": true,
          "!flex": open,
        })}
      >
        <AiFillCloseCircle />
      </button>
    </div>
  );
}

export default Search;
