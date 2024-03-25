import classNames from "classnames";
import Logo from "@/assets/icons/brand.svg?react";
import CustomButton from "@/components/button";
import useTopNavigation from "./hooks/useTopNavigation";
import { DashboardSquareIcon, MailReplyIcon, UserIcon } from "@/assets/icons";
import { SOCIAL_LINKS } from "@/utils/constant";

import "@/assets/styles/nav.scss";

const NAV_ITEMS = [
  { path: "#about", name: "About", icon: UserIcon },
  { path: "#projects", name: "Projects", icon: DashboardSquareIcon },
  { path: "#contact", name: "Contact", icon: MailReplyIcon },
];

const TopNavigation = () => {
  const { menu, top, setMenu, lenis } = useTopNavigation();

  return (
    <header
      className="w-full animate-fade-in transition-all duration-300 fixed z-50"
      style={{ top }}
    >
      <div className="container relative bg-dark">
        <div className="flex items-center justify-between h-16 border px-5">
          <a href="/" className="text-zinc-50 z-50">
            <Logo width={50} height={30} />
          </a>
          <div className="flex items-center gap-8">
            <nav
              className={classNames("flex", {
                "nav-visible": menu,
              })}
            >
              {NAV_ITEMS.map((item, idx) => (
                <a
                  key={idx}
                  href={item.path}
                  className={classNames(
                    "text-zinc-400 text-lg md:text-base flex items-center gap-4 md:gap-3 h-fit",
                    "py-2.5 md:py-0 md:px-4 transition-all"
                  )}
                  onClick={() => {
                    setMenu(false);
                    lenis.scrollTo(item.path);
                  }}
                >
                  <span className="transition-all duration-500 border md:border-none p-2 md:p-0">
                    <item.icon className="w-5 h-5" />
                  </span>
                  {item.name}
                </a>
              ))}
              <div className="block md:hidden mt-4">
                <CustomButton
                  href="https://drive.google.com/file/d/1s1DPe36CaSGmsjSEJ3jmQUuOMHqIqVYO/view"
                  text="Résumé"
                  icon="file-link"
                />
                <div className="mt-8 flex gap-4 justify-center">
                  {SOCIAL_LINKS.map((item, idx) => (
                    <a
                      href={item.link}
                      key={idx}
                      className="text-zinc-500 p-2"
                      target="_blank"
                    >
                      <item.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </nav>
            <div className="hidden md:block">
              <CustomButton
                href="https://drive.google.com/file/d/1s1DPe36CaSGmsjSEJ3jmQUuOMHqIqVYO/view"
                text="Résumé"
                icon="file-link"
              />
            </div>
            <div
              className={classNames("menu-btn block md:hidden", {
                close: menu,
              })}
              onClick={() => setMenu(!menu)}
            >
              {[1, 2, 3].map((_, idx) => (
                <div key={idx} className="btn-bar bg-zinc-50" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavigation;
