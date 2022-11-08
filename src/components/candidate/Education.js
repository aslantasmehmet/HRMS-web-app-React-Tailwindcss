import React from "react";

export default function Education() {
 
  return (
    <>
      <div className="border bg-white w-full h-96 mt-4 rounded shadow-xl">
        <div className="mt-4 ml-4 flex justify-start text-xl font-semibold">
          Eğitim Bilgileri
        </div>
        <div className="divider shadow-xl" />
        <div className="grid grid-cols-4 gap-4">
          <div className="mt-4">
            <img src="https://img-kariyer.mncdn.com/UniversiteLogolar/anadolu-universitesi.png" />
            <div className="mt-4 font-semibold text-black">Lisans</div>
          </div>
          <div className="flex flex-col">
            <div>
              <div className="flex justify-start text-base text-gray-400">
                Üniversite
              </div>
              <div className="flex justify-start font-semibold text-lg">
                Anadolu Üniversitesi
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-start text-base text-gray-400">
                Başlangıç Tarihi
              </div>
              <div className="flex justify-start font-semibold text-lg">
                09.2018
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-start">Öğretim Dili</div>
              <div className="flex justify-start font-semibold text-lg">
                Türkçe
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div>
              <div className="flex justify-start text-base text-gray-400">
                Fakülte
              </div>
              <div className="flex justify-start font-semibold text-lg">
                Ekonomi Fakültesi
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-start"> Bitiş Tarihi</div>
              <div className="flex justify-start font-semibold text-lg">
                06.2021
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div>
              <div className="flex justify-start text-base text-gray-400">
                Bölüm
              </div>
              <div className="flex justify-start font-semibold text-lg">
                Çalışma Ekonomisi ve Endüstri İlişkileri
              </div>
            </div>
          </div>
        </div>
        <div className="divider" />
      </div>
    </>
  );
}
