import React from 'react'

export default function SummaryInformation() {
  return (
    <div>
        <div className="border bg-white w-full h-64 mt-4 rounded shadow-xl">
            <div className="mt-4 ml-4 flex justify-start text-xl font-semibold">
              Özel Bilgiler
            </div>
            <div className="divider shadow-xl" />
            <div className="grid gap-x-8 gap-y-4 grid-cols-3">
              <div>
                <div className="flex justify-start ml-4 text-gray-500">
                  Doğum Tarihi
                </div>
                <div className="flex justify-start ml-4 font-semibold text-lg">
                  1995-08-04
                </div>
              </div>
              <div>
                <div className="flex justify-start text-gray-500">
                  Kimlik Numarası
                </div>
                <div className="flex justify-start font-semibold text-lg">
                  67246112188
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
    </div>
  )
}
