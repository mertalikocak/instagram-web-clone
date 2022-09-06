import { useField } from "formik";
import { useEffect, useState } from "react";
import classNames from "classnames";

export default function Input({ label, type = "text", ...props }) {
  const [field, meta, helpers] = useField(props);

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
        type={inputType}
        className={classNames({
          " h-[38px] w-full   px-2 text-xs outline-none  ": true,
          "pt-[10px]": field.value,
        })}
        {...field}
        {...props}
      />
      <small
        className={classNames({
          "pointer-events-none absolute  left-[9px] translate-y-0.5 cursor-text  text-gray-400 transition-all ": true,
          "top-2.5 text-xs": !field.value,
          "top-0 text-[10px]": field.value,
        })}
      >
        {label}
      </small>
      {type === "password" && field.value && (
        <div
          onClick={() => setShow(!show)}
          className=" flex h-full cursor-pointer select-none items-center pr-2 text-sm font-medium "
        >
          {show ? "Hide" : "Show"}
        </div>
      )}
    </label>
  );
}
