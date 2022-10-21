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
                  <input className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-purple-500 outline-none peer text-sm pt-2 " />
                  <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 tansition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">
                    Şirket Ara
                  </span>
                </label>
                <label className="mr-2">
                  <input
                    placeholder="Şehir veya İlçe ara"
                    className=" h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-purple-500 outline-none peer text-sm pt-2"
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
              <div className="grid grid-cols-4 gap-4 mb-8">
                <div>
                  {" "}
                  <button className="border-2 border-slate-300 bg-white hover:border-purple-500 rounded-full h-8 w-full text-base text-primary-brand-color font-semibold">
                    Finans Uzmanı
                  </button>{" "}
                </div>
                <div>
                  {" "}
                  <button className="border-2 border-slate-300 bg-white hover:border-purple-500 rounded-full h-8 w-full text-base text-primary-brand-color font-semibold">
                    Proje Yöneticisi
                  </button>{" "}
                </div>
                <div>
                  {" "}
                  <button className="border-2 border-slate-300 bg-white hover:border-purple-500 rounded-full h-8 w-full text-primary-brand-color font-semibold">
                    İK Uzmanı
                  </button>{" "}
                </div>
                <div>
                  {" "}
                  <button className="border-2 border-slate-300 bg-white hover:border-purple-500 rounded-full h-8 w-full text-primary-brand-color font-semibold">
                    Finans Uzmanı
                  </button>{" "}
                </div>
                <div>
                  {" "}
                  <button className="border-2 border-slate-300 bg-white hover:border-purple-500 rounded-full h-8 w-full text-primary-brand-color font-semibold">
                    İstanbul(Asya)
                  </button>{" "}
                </div>
                <div>
                  {" "}
                  <button className="border-2 border-slate-300 bg-white hover:border-purple-500 rounded-full h-8 w-full text-primary-brand-color font-semibold">
                    İstanbul (Avrupa)
                  </button>{" "}
                </div>
                <div>
                  {" "}
                  <button className="border-2 border-slate-300 bg-white hover:border-purple-500 rounded-full h-8 w-full text-primary-brand-color font-semibold">
                    İzmir
                  </button>{" "}
                </div>
              </div>
            </div>
            <div className="flex-auto w-16 mt-6 pr-14 ">
              <picture className="flex justify-end  scale-125 pb-8 ">
                <img src="https://aday-spage.mncdn.com/Knet_img_k-logo-lg.bcffa94.png?v=p0930095816756" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
