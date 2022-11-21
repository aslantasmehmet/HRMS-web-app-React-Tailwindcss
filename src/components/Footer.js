import React from "react";

import { IoLogoFacebook } from "react-icons/io";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";

export default function footer() {
  return (
    <div className="bg-purple-700 h-80">
      <div className=" container mx-auto">
        <div className="grid grid-cols-6">
          <div className="felx flex-col mt-6 text-left">
            <p className="text-white font-semibold text-base pb-2">
              SİTE KULLANIMI
            </p>
            <p className="text-white text-sm">
              Genel Koşullar <br />
              Site Haritası
            </p>
          </div>
          <div className="mt-6 text-left">
            <p className="text-white font-semibold text-base pb-2">
              VERİ POLİTİKAMIZ
            </p>
            <p className="text-white text-sm">
              Aday Üyelik Aydınlatma Metni <br />
              Çalışan Aydınlatma Metni
              <br />
              İşveren Müşteri Temsilcisi
              <br />
              İşveren Müşteri Temsilcisi
              <br />
              Aydınlatma Metni
              <br />
              Tedarikçi/İş Ortağı Temsilcisi
              <br />
              Aydınlatma Metni
              <br />
              Bilgi Güvenliği Politikası
            </p>
          </div>
          <div className="ml-20 mt-6 text-left">
            <p className="text-white font-semibold text-base pb-2">YARDIM</p>
            <p className="text-white text-sm">
              Sorum Var <br /> Önerim Var <br /> Sık Sorularn Sorular
            </p>
          </div>
          <div className="ml-20 mt-6 text-left">
            <p className="text-white font-semibold text-base pb-2">
              HAKKIMIZDA
            </p>
            <p className="text-white text-sm ">
              Hakkımızda <br />
              Reklam Verin
              <br />
              İletişim
              <br />
              İlan Satın Al
              <br />
              Kariyer Rehberi
              <br />
              İK Blog
              <br />
              İşin Olsun
            </p>
          </div>
          <div className="ml-16 mt-6 text-left">
            <p className="text-white font-semibold text-base pb-2">
              SOSYAL MEDYA
            </p>
            <div className="flex justify-start text-white mb-2">
              <IoLogoFacebook size={23} className="" /> Facebook
            </div>
            <div className="flex justify-start text-white mb-2">
              <BsTwitter size={23} className="" /> Twitter
            </div>
            <div className="flex justify-start text-white mb-2">
              <BsInstagram size={23} className="" /> İnstagram
            </div>
            <div className="flex justify-start text-white mb-2">
              <AiFillYoutube size={23} className="" /> YouTube
            </div>
          </div>
          <div className="ml-16">
            <img src="https://aday-spage.mncdn.com/Knet_img_gptw-footer-new.25aa646.png?v=p1004170356728" />
          </div>
        </div>
        <div className="flex justify-end mr-4">
          <p className="text-white pt-2 text-sm font-semibold">
            Kariyer.net ile İş Cebinizde
          </p>
          <img
            className="ml-4"
            src="https://aday-spage.mncdn.com/Knet_img_app-store.0e5a53d.svg?v=p1004170356728"
          />
          <img
            className="w-32 h-10 ml-2 pt-1"
            src="https://aday-spage.mncdn.com/Knet_img_google-play.f2ca834.png?v=p1004170356728"
          />
        </div>
      </div>
    </div>
  );
}
