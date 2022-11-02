import React from "react";

export default function CandidateProfile() {
  return (
    <div className="bg-gray-100 h-full">
      <div className="grid grid-cols-3 gap-4 mx-24 ">
        {/* Menü */}
        <div className="border bg-white mt-4 my-32 w-96 h-96 shadow-xl rounded-lg">
          <div className="flex">
            <div className="flex-col ml-8">
              <div className="flex justify-start mt-4">Profil</div>
              <div className="flex justify-start mt-4">Özgeçmişler</div>
              <div className="flex justify-start mt-4">Dosyalar /Önyazılar</div>
            </div>
          </div>
          <div className="divider ml-8 " />
          <div className="flex">
            <div className="flex-col ml-8">
              <div className="flex justify-start ">Başvurulanlar </div>
              <div className="flex justify-start mt-4">Kaydedilenler</div>
              <div className="flex justify-start mt-4">İş Alarmları</div>
            </div>
          </div>
          <div className="divider ml-8 " />
          <div className="flex">
            <div className="flex-col ml-8">
              <div className="flex justify-start ">Mesajlar</div>
            </div>
          </div>
        </div>

        {/* KişiselBilgiler */}
        <div className="col-span-2">
          <div className="flex">
            <div className="justify-start mt-4">
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <div className="text-2xl">Hoş geldin</div>
                  <div className="ml-2 font-semibold text-2xl text-black">
                    Mehmet
                  </div>
                </div>
                <div className="flex justify-start mt-2 text-base">
                  Henüz Mesaj Yok
                </div>
              </div>
            </div>
            <button className="justify-end ml-96 border shadow bg-gray-100 w-32 h-10 mt-4 border-purple-600 text-purple-600 rounded font-semibold text-base hover:bg-purple-600 hover:text-white">
              Mesajlar
            </button>
          </div>
          <div className="border bg-white w-full h-64 mt-4 shadow">
            <div>
              <div className="flex">
                <div className="justify-start mt-4">
                  <div className="flex flex-col">
                    <div className="flex flex-row">
                      <div className="text-2xl ml-2 font-semibold">
                        Güncel Özgeçmiş
                      </div>
                    </div>
                    <div className="flex justify-start text-sm ml-2 mt-1 text-gray-500">
                      En son güncellediğiniz özgeçmişe buradan ulaşabilirsiniz.
                    </div>
                  </div>
                </div>
                <button className="justify-end ml-64 text-purple-600">
                  Tümünü Gör
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="border bg-gray-100 w-full h-32 mt-6 ml-3 mr-3 rounded shadow">
                <div className="flex flex-row">
                  <div>
                    <img
                      className="border rounded-full w-16 h-16 ml-4 mt-4"
                      src="data:image/jpeg;base64,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"
                    />
                  </div>
                  <div className="mt-3 ml-3 flex flex-col">
                    <div></div>
                    <div className=" flex justify-start font-semibold">
                      Mehmet ASLANTAŞ
                    </div>
                    <div className="text-gray-500 text-base">
                      Son güncelleme:27.09.2022
                    </div>
                    <div className="flex justify-start">
                      <button className="text-purple-600">Güncelle </button>
                      <div>| Görünürlük</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      {/* Kişisel Bilgiler */}
          <div className="border bg-white w-full h-64 mt-4 rounded shadow-xl">
            <div className="mt-4 ml-4 flex justify-start text-xl font-semibold">
              Özel Bilgiler
            </div>
            <div className="divider shadow-xl" />
            <div className="grid gap-x-8 gap-y-4 grid-cols-3">
              <div>
                <div className="flex justify-start ml-4 text-gray-500">
                  Cinsiyet
                </div>
                <div className="flex justify-start ml-4 font-semibold text-lg">
                  Erkek
                </div>
              </div>
              <div>
                <div className="flex justify-start text-gray-500">Uyruk</div>
                <div className="flex justify-start font-semibold text-lg">
                  Türkiye Cumhuriyeti
                </div>
              </div>
              <div>
                <div className="flex justify-start text-gray-500">
                  Sürücü Belgesi
                </div>
                <div className="flex justify-start font-semibold text-lg">
                  B
                </div>
              </div>
              <div>
                <div className="flex justify-start ml-4 text-gray-500">
                  Askerlik Durumu
                </div>
                <div className="flex justify-start ml-4 font-semibold text-lg">
                  Tecilli
                </div>
              </div>
            </div>
          </div>
          {/* İş deneyimleri */}
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
                  <div className="flex justify-start text-base text-gray-400">Pozisyon</div>
                  <div className="flex justify-start font-semibold text-lg">
                    Bilgi İşlem Stajyeri
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-start text-base text-gray-400"> Firma Adı</div>
                  <div className="flex justify-start font-semibold text-lg">
                    Merkez Çelik A.Ş.
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-start text-base text-gray-400">Başlangıç Tarihi</div>
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
                  <div className="flex justify-start text-base text-gray-400">Şehir</div>
                  <div className="flex justify-start font-semibold text-lg">
                    Kayseri
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-start  text-base text-gray-400"> Bitiş Tarihi</div>
                  <div className="flex justify-start font-semibold text-lg">
                    08.2018
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="mt-16">
                  <div className="flex justify-start text-base text-gray-400">Firma Sektörü</div>
                  <div className="flex justify-start font-semibold text-lg">
                    Mobilya
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-start text-base text-gray-400">Çalışma Şekli</div>
                  <div className="flex justify-start font-semibold text-lg">
                    Stajyer
                  </div>
                </div>
              </div>
            </div>
          </div>
      {/* EğitimBilgileri */}
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
                  <div className="flex justify-start text-base text-gray-400">Üniversite</div>
                  <div className="flex justify-start font-semibold text-lg">
                    Anadolu Üniversitesi
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-start text-base text-gray-400">Başlangıç Tarihi</div>
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
                <div >
                  <div className="flex justify-start text-base text-gray-400">Fakülte</div>
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
                <div >
                  <div className="flex justify-start text-base text-gray-400">Bölüm</div>
                  <div className="flex justify-start font-semibold text-lg">
                    Çalışma Ekonomisi ve Endüstri İlişkileri
                  </div>
                </div>
                
              </div>
            </div>
            <div className="divider"/>
            
          </div>
        </div>

        {/* Ortak */}
      </div>
    </div>
  );
}
