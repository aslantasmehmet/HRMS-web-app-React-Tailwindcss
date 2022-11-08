import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Education from "../../components/candidate/Education";
import SummaryInformation from "../../components/candidate/SummaryInformation";
import WorkExperience from "../../components/candidate/WorkExperience";
import ResumeService from "../../service/ResumeService";

export default function CandidateProfile() {
  const { authItem } = useSelector((state) => state.auth);
  let { id } = useParams();
  const [candidates, setCandidates] = useState({});
  let resumeService = new ResumeService();
  useEffect(() => {
    resumeService
      .getbyid(authItem[0].user.id)
      .then((result) => setCandidates(result.data.data));
  }, []);

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
                    {candidates.candidate?.firstName}
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
                      src={candidates.candidate?.imageUrl}
                    />
                  </div>
                  <div className="mt-3 ml-3 flex flex-col">
                    <div></div>
                    <div className=" flex justify-start font-semibold">
                      {candidates.candidate?.firstName +
                        " " +
                        candidates.candidate?.lastName}
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
          <SummaryInformation/>
          {/* İş deneyimleri */}

          <WorkExperience />
          {/* EğitimBilgileri */}

          <Education />
        </div>

        {/* Ortak */}
      </div>
    </div>
  );
}
