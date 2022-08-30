import { useEffect } from "react";
import { useState } from "react";

export default function Input({ label, type = "text", ...props }) {
  const [show, setShow] = useState(false);
  const [inputType, setType] = useState(type);
  useEffect(() => {
    if (show) {
      setType("text");
    } else if (type === "password") {
      setType("password");
    }
  }, [show, type]);
  return (
    <label className="relative block flex rounded-sm border bg-zinc-50 focus-within:border-gray-400">
      <input
        required={true}
        type={inputType}
        className="peer h-[38px] w-full   px-2 text-xs outline-none valid:pt-[10px] "
        {...props}
      />
      <small className="pointer-events-none absolute top-2 left-[9px] translate-y-0.5 cursor-text text-xs text-gray-400 transition-all peer-valid:top-0 peer-valid:text-[10px]">
        {label}
      </small>
      {type === "password" && props?.value && (
        <button
          type="button"
          onClick={() => setShow(!show)}
          className=" flex h-full items-center pr-2 text-sm font-medium "
        >
          {show ? "Hide" : "Show"}
        </button>
      )}
    </label>
  );
}
