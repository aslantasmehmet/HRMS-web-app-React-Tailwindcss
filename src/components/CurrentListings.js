import React from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { GiGraduateCap } from "react-icons/gi";
import { BsGraphUp } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";

export default function CurrentListings() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-gray-100  ">
      <div className="col-span-2 mx-8">
        <div className="flex flex-col mx-24 my-10">
          <div>
            <h4 className="text-3xl flex text-gray-500 pb-6">
              KARİYERİNİ PLANLA
            </h4>
            <br />
            <p className="text-left text-gray-400">
              Kariyerini planlamaya hazır mısın? Üniversite tercihinden itibaren
              kariyer yolculuğunun her a dımını titizlikle planlayabileceğin
              içerikleri senin için bir araya getirdik. Merak ettiğin tüm
              sorulara yanıt bulacak, iş fırsatlarını keşfedeceksin!
            </p>
          </div>

          <div>
            <div className="border h-18 w-full mb-2 mt-12 rounded hover:shadow-xl  bg-white  flex justify-start hover:text-purple-700 ">
              <TfiWrite size={55} className="pt-1 pr-6 pl-4" />
              <div className="pt-6  font-semibold  text-lg  ">
                Hangi bölümde seni ne bekliyor?
              </div>
            </div>
            <div className="border h-18 w-full my-2 rounded hover:shadow-xl bg-white  flex justify-start hover:text-purple-700 ">
              <BsGraphUp size={55} className="pt-1 pr-6 pl-4" />
              <p className="pt-6  font-semibold text-lg">
                Pozisyonların iş tanımları neler?
              </p>
            </div>
            <div className="border h-18 w-full my-2 rounded hover:shadow-xl bg-white flex justify-start hover:text-purple-700 ">
              <GiGraduateCap size={65} className="pt-1 pr-6 pl-4" />
              <p className="pt-6  font-semibold  text-lg">
                Meslek gurupları ne kadar maaş alıyor?
              </p>
            </div>
            <div className="border h-18 w-full mt-2 mb-8 rounded hover:shadow-xl bg-white flex justify-start hover:text-purple-700 ">
              < AiOutlineSearch size={65} className="pt-1 pr-6 pl-4" />
              <p className="pt-6  font-semibold  text-lg">
                Sana özel cvşablonları burada!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-40 mx-8">
        <img src="https://aday-spage.mncdn.com/Knet_img_k-career-plan.3d90f73.png?v=p1004170356728" />
      </div>
    </div>
  );
}

