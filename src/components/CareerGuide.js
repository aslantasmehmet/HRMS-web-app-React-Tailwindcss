import React from "react";

export default function CareerGuide() {
  return (
    <div className="bg-white h-96  ">
      <div className="container mx-auto ">
        <div className="flex justify-between mx-2 ">
            <div className="pt-6 text-xl">KARİYER REHBERİ</div>
            <div className=" pt-6"><button className="font-semibold text-purple-600 hover:text-purple-700">Tümünü Gör</button></div>
            
        </div>
        
        <div className="grid grid-cols-4 mx-2 ">
          <div className="border h-65 bg-white mt-8 mr-2 rounded-lg hover:shadow-xl cursor-pointer">
            <img className="border w-full rounded-lg" src="https://www.kariyer.net/kariyer-rehberi/wp-content/uploads/2022/11/generation_z-300x200.jpg" />
            <p className="text-left px-3 my-6 font-semibold">İşverenlerin Z kuşağından beklediği 5 şey</p>
          </div>
          <div className="border h-65 bg-white mt-8 mr-2 rounded-lg hover:shadow-xl cursor-pointer ">
            <img className="border w-full rounded-lg" src="https://www.kariyer.net/kariyer-rehberi/wp-content/uploads/2022/11/yuksek_lisans-300x200.jpg" />
            <p className="text-left px-3 my-6 font-semibold">Yüksek lisans yapmak kariyerini nasıl etkiler?</p>
          </div>
          <div className="border h-65 bg-white mt-8 mr-2 rounded-lg hover:shadow-xl cursor-pointer">
            <img className="border w-full rounded-lg" src="https://www.kariyer.net/kariyer-rehberi/wp-content/uploads/2022/11/career_management-300x200.jpg" />
            <p className="text-left px-3 my-6 font-semibold">Doğru kariyer yönetimi nasıl yapılır ? </p>
          </div>
          <div className="border h-65 bg-white mt-8 mr-2 rounded-lg hover:shadow-xl cursor-pointer">
            <img className="border w-full rounded-lg" src="https://www.kariyer.net/ik-blog/wp-content/uploads/2022/11/finalcheck_2022-300x200.jpg" />
            <p className="text-left px-3 my-6 font-semibold">Kiralık diplomalar can güvenliğini nasıl tehdit ediyor ?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
