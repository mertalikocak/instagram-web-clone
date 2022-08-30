import { useEffect, useRef, useState } from "react";
import Input from "components/Input";
import { AiFillFacebook } from "react-icons/ai";

function App() {
  const ref = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const enable = username && password;
  useEffect(() => {
    let images = ref.current.querySelectorAll("img"),
      total = images.length,
      current = 0;
    const imageSlider = () => {
      if (current > 0) {
        images[current - 1].classList.add("opacity-0");
      } else {
        images[total - 1].classList.add("opacity-0");
      }
      images[current].classList.remove("opacity-0");
      if (current === total - 1) {
        current = 0;
      } else {
        current += 1;
      }
    };
    imageSlider();
    let interval = setInterval(imageSlider, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  return (
    <>
      <div className=" mb-8 flex h-full w-full  flex-wrap items-center justify-center gap-8 overflow-hidden pb-8">
        <div className=" relative  hidden h-[581px] w-[380px] bg-logo-pattern bg-[length:468.32px_634.15px] bg-[top_left_-46px] md:block ">
          <div
            ref={ref}
            className="absolute top-[27px] right-[18px] h-[538.84px] w-[250px]"
          >
            <img
              className="absolute top-0 left-0 h-full w-full opacity-0 transition-opacity duration-1000 ease-linear"
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"
              alt=""
            />
            <img
              className="absolute top-0 left-0 h-full w-full opacity-0 transition-opacity duration-1000 ease-linear"
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png"
              alt=""
            />
            <img
              className="absolute top-0 left-0 h-full w-full opacity-0 transition-opacity duration-1000 ease-linear"
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png"
              alt=""
            />
            <img
              className="absolute top-0 left-0 h-full w-full  opacity-0 transition-opacity duration-1000 ease-linear"
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png"
              alt=""
            />
          </div>
        </div>
        <div className="grid w-[350px] gap-y-3">
          <div className=" border border-border bg-white px-[40px] pt-10 pb-4">
            <a href="/#" className="mb-8 flex justify-center  ">
              <img
                className="h-[51px]"
                src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
                alt=""
              />
            </a>
            <form className="grid gap-[6px]">
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                label="Phone number, username or email"
              />
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
              />

              <button
                type="submit"
                disabled={!enable}
                className="mt-1 h-[30px] w-full rounded-sm bg-brand text-sm font-medium text-white disabled:opacity-50"
              >
                Log In
              </button>
              {/* ---Or-- */}
              <div className="mt-[10px] mb-[18px] flex items-center">
                <div className="h-px flex-1 bg-gray-300"></div>
                <span className="px-4 text-xs font-semibold text-gray-500">
                  OR
                </span>
                <div className="h-px flex-1 bg-gray-300"></div>
              </div>
              <a
                href="/#"
                className="flex items-center justify-center gap-x-2 text-sm font-semibold text-facebook"
              >
                <AiFillFacebook size={20} />
                Log in with Facebook
              </a>
              <a
                href="/#"
                className="mt-3 flex items-center justify-center text-xs text-link"
              >
                Forgot Password?
              </a>
            </form>
          </div>

          <div className=" border border-border bg-white py-5 text-center text-sm">
            Don't have an account?{" "}
            <a href="/#" className="font-semibold text-brand">
              Sign up
            </a>
          </div>
          <div className="flex w-full flex-col items-center">
            <div className="my-2.5 text-sm">Get the app.</div>
            <div className="my-2.5 flex gap-2">
              <img
                className="w-[136px]"
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                alt="appstore"
              />
              <img
                className="w-[136px]"
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                alt="googleplay"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
