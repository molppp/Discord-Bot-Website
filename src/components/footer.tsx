import React from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex flex-col">
              <span className="text-2xl font-semibold text-gray-900 dark:text-white">
              Mizoko Shop              </span>
              <div className="max-w-xs">
                <p className="text-sm text-gray-600 dark:text-gray-400 text-wrap md:text-balance break-all">
                 DİSCORD SUNUCULARI PBLİC EKİP GİBİ İSTEDİĞİNİZ SUNUUCU TASARLAMAK İÇİN MİZOKO
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
               Mizoko
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline ">
                    Premium
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Support Server
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline ">
                    Discprd
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Company
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Terms of Use
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="discord.gg/yakkında" className="hover:underline">
            MİZOKO SHOP
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Dİscord
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            />
            <SHOP
              href="discord.gg/yakkında"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
