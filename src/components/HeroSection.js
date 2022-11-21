import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function HeroSection() {
  return (
    <div className="bg-gray-100">
      <div className="h-full ">
        <div className="pt-24">
          <div className="flex">
            <div className="flex-none"></div>
            <div className="flex-auto w-80 ml-32 ">
              {" "}
              <h2 className="text-4xl flex justify-start">
                Kariyer Fırsatlarını Keşfet
              </h2>
              <div className="flex justify-start pt-2">
                <div className="font-semibold text-xl pr-2">83.961</div>
                <div className="pr-2 text-xl">iş ilanı</div>
                <div className="font-semibold text-xl pr-2">on binlerce</div>
                <div className="text-xl">şirket</div>
              </div>
              <div className="grid grid-cols-3 pt-4">
                <label className="mr-2 flex-1 relative block">
                  <input className="placeholder:text-left h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-purple-500 outline-none peer text-sm " 
                  placeholder="Şehir veya İlçe ara"
                  name="search"
                    type="text"
                  />
                 
                </label>
                <label className="mr-2">
                  <input
                    placeholder="Şehir veya İlçe ara"
                    className="placeholder:text-left h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-purple-500 outline-none peer text-sm "
                    name="search"
                    type="text"
                  />
                </label>
                <label>
                  <button className="bg-purple-700 text-white transition-color hover:border-purple-500 hover:text-brand-yellow h-14 flex items-center justify-center rounded-md w-36 text-sm font-semibold ">
                    <AiOutlineSearch className="pr-2" size={30} /> İŞ BUL
                  </button>
                </label>
              </div>
              <div className="pt-8 pb-4 flex justify-start">
                <h5 className="text-slate-400 font-normal">POPÜLER ARAMALAR</h5>
              </div>
              <div className="flex flex-row justify-start">
                <div className="mr-2">
                  {" "}
                  <button className="border-2 border-slate-300 bg-white hover:border-purple-500 rounded-full h-8 w-full text-base text-primary-brand-color font-semibold mx-2 my-2">
                    Finans Uzmanı
                  </button>{" "}
                </div>
                <div>
                  {" "}
                  <button className="border-2 border-slate-300 bg-white hover:border-purple-500 rounded-full h-8 w-full text-base text-primary-brand-color font-semibold mx-2 my-2 ">
                    Proje Yöneticisi
                  </button>{" "}
                </div>
                <div className="mx-2">
                  {" "}
                  <button className="border-2 border-slate-300 bg-white hover:border-purple-500 rounded-full h-8 w-full text-primary-brand-color font-semibold mx-2 my-2">
                    İK Uzmanı
                  </button>{" "}
                </div>
                <div >
                  {" "}
                  <button className="border-2 border-slate-300 bg-white hover:border-purple-500 rounded-full h-8 w-full text-primary-brand-color font-semibold mx-2 my-2">
                    Finans Uzmanı
                  </button>{" "}
                </div>
                 <div className="mx-2">
                  {" "}
                  <button className="border-2 border-slate-300 bg-white hover:border-purple-500 rounded-full h-8 w-full text-primary-brand-color font-semibold mx-2 my-2">
                   Yazılım Geliştirici
                  </button>{" "}
                </div>
              </div>
              <div className="flex flex-row justify-start">
              <div className="mr-2">
                  {" "}
                  <button className="border-2 border-slate-300 bg-white hover:border-purple-500 rounded-full h-8 w-full text-primary-brand-color font-semibold mx-2 my-2">
                   İstanbul(Avrupa)
                  </button>{" "}
                </div>
                <div>
                  {" "}
                  <button className="border-2 border-slate-300 bg-white hover:border-purple-500 rounded-full h-8 w-full text-primary-brand-color font-semibold mx-2 my-2">
                  İstanbul(Asya)
                  </button>{" "}
                </div>
                <div className="mx-2">
                  {" "}
                  <button className="border-2 border-slate-300 bg-white hover:border-purple-500 rounded-full h-8 w-full text-primary-brand-color font-semibold mx-2 my-2">
                   Ankara
                  </button>{" "}
                </div>
              </div>
            </div>
            <div className="flex-auto w-16 mt-4 pr-14 ">
              <picture className="flex justify-end  scale-125 pb-10 ">
                <img src="https://aday-spage.mncdn.com/Knet_img_k-logo-lg.bcffa94.png?v=p0930095816756" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
