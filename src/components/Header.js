export default function Header() {
  return (
    <div className="bg-white ">
      <div className="h-16 container mx-auto  ">
        <div className="flex justify-between">
          <div className="flex justify-start">
            <div>
              <img
                className="pt-3.5 pr-8 cursor-pointer"
                src="https://aday-spage.mncdn.com/Knet_img_KnetLogo.ae2b40d.svg?v=p0930095816756"
              />
            </div>

            <div className="pr-8 pt-3.5 font-semibold text-lg hover:text-purple-700  cursor-pointer ">
              İş Ara
            </div>

            <div className="pr-8 pt-3.5 font-semibold text-lg">
              Kariyer Planlaması
            </div>

            <div className="pt-3.5 font-semibold text-lg">Kariyer Rehberi</div>
          </div>
          <div className="pl-56 pt-3.5 flex justify-end ">
            <button className="mr-4 h-10 w-32 border-2 border-cyan-200 font-semibold  bg-neutral-50 rounded text-cyan-300 hover:bg-cyan-300 hover:text-white">
              İlan Paketi Al
            </button>{" "}
            <button className="bg-purple-700 hover:bg-purple-800 border rounded-lg h-10 w-48 text-white font-semibold">
              Giriş Yap/Üye Ol
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
