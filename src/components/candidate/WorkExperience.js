import React from "react";

export default function WorkExperience() {
  return (
    <>
      <div className="border bg-white w-full h-96 mt-4 rounded shadow-xl">
        <div className="mt-4 ml-4 flex justify-start text-xl font-semibold">
          İş Deneyimleri
        </div>
        <div className="divider shadow-xl" />
        <div className="grid grid-cols-4 gap-4">
          <div className="mt-4">
            <img src="https://aday-asset.mncdn.com/img/firma-logosuz.png" />
            <div className="mt-4 font-semibold text-black">3 Ay</div>
          </div>
          <div className="flex flex-col">
            <div>
              <div className="flex justify-start text-base text-gray-400">
                Pozisyon
              </div>
              <div className="flex justify-start font-semibold text-lg">
                Bilgi İşlem Stajyeri
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-start text-base text-gray-400">
                {" "}
                Firma Adı
              </div>
              <div className="flex justify-start font-semibold text-lg">
                Merkez Çelik A.Ş.
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-start text-base text-gray-400">
                Başlangıç Tarihi
              </div>
              <div className="flex justify-start font-semibold text-lg">
                06.2018
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-start">İş Tanımı</div>
              <div className="flex justify-start font-semibold text-lg">
                Ar-ge Proses{" "}
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mt-16">
              <div className="flex justify-start text-base text-gray-400">
                Şehir
              </div>
              <div className="flex justify-start font-semibold text-lg">
                Kayseri
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-start  text-base text-gray-400">
                {" "}
                Bitiş Tarihi
              </div>
              <div className="flex justify-start font-semibold text-lg">
                08.2018
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mt-16">
              <div className="flex justify-start text-base text-gray-400">
                Firma Sektörü
              </div>
              <div className="flex justify-start font-semibold text-lg">
                Mobilya
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-start text-base text-gray-400">
                Çalışma Şekli
              </div>
              <div className="flex justify-start font-semibold text-lg">
                Stajyer
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
