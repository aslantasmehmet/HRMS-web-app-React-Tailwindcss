import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {  NavLink } from "react-router-dom";
import ResumeService from "../../service/ResumeService";
import { HiMail } from "react-icons/hi";
import { BsPlusCircle } from "react-icons/bs";
import { Segment } from "semantic-ui-react";
import {
  Card,
  Avatar,
  CardBody,
  Stack,
  Heading,
  Text,
  Box,
  CardHeader,
  StackDivider,
  Image,
} from "@chakra-ui/react";

export default function CandidateProfile() {

  const [resumes, setResumes] = useState([]);
  const { authItem } = useSelector((state) => state.auth);

  let resumeService = new ResumeService();

  useEffect(() => {
    resumeService
      .getResumeDetailsByCandidateId(authItem[0].user.id)
      .then((result) => setResumes(result.data.data));
  }, []);
  
  


  return (
    <div className="grid grid-cols-3 gap-4 bg-gray-100 ">
      {/* Kullanıcı Menü */}
      <div class="ml-16">
        <div className="border bg-white mt-4 my-32 w-96 h-96 shadow-xl rounded-lg">
          <div className="flex">
            <div className="flex-col ml-8">
              <div className="flex justify-start mt-4"><NavLink className={({ isActive }) => (isActive ?  ' font-bold' : 'font-normal')}  to='/aday/profile'>Profil</NavLink></div>
              <div className="flex justify-start mt-4"><NavLink className={({ isActive }) => (isActive ?  ' font-bold' : 'font-normal')}  to='/aday/özgecmis'>Özgeçmişler</NavLink></div>
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
      </div>

      {/* Kullanıcı Özgeçmiş */}

      <div class="col-span-2 ">
        <div className="flex flex-col ">
         
         
          {/* Kullanıcı KişiselBilgiler */}

          <div className="mr-16 flex ml-64 ">
            <Card mt="6" width="50%" height={80}>
              <CardBody>
                <Avatar
                  src="https://docs.kariyer.net/candidate/000/020/262/avatar/2026233620220122124854462.jpg?filesec=XdsV1VzBKiPzRwcAz5MUUq0tBINHTZ4DxU7cWGrLyw32Bdxq7q1ciB5xGSa%2Bz%2FCt%2Baw5tM9TFAqqy8ZHhtXefEHpf1iCQGxV!e!"
                  alt="Green double couch with wooden legs"
                  borderRadius="full"
                  size="3xl"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">
                    {resumes.candidate?.firstName +
                      " " +
                      resumes.candidate?.lastName}{" "}
                  </Heading>
                  <Text>
                    <div className="flex justify-center">
                      <HiMail className="mr-1" size={20} />
                      {resumes.candidate?.email}
                    </div>
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </div>

          {/* Özet Bilgi */}

          <div className="mr-16 mt-4 bg-white shadow-xl rounded-lg">
            <Card>
              <div className="flex flex-row">
                <CardHeader>
                  <div className="flex flex-row ">
                    <Heading ml="8" size="md" mr="8" pt="2">
                      ÖZET BİLGİ
                    </Heading>
                    <button className="border border-gray-300 hover:border-gray-600 hover:bg-gray-100  shadow rounded-full border-black ">
                      {" "}
                      <div className="flex flex-row ">
                        <BsPlusCircle className="mt-2 ml-2 text-gray-500 " />
                        <p className="py-1 px-1 mr-2 text-base text-gray-500 font-semibold  ">
                          Özet bilgi güncelle
                        </p>
                      </div>
                    </button>
                  </div>
                  <div className="divider " />
                </CardHeader>
              </div>
              
                <CardBody >
                  <div className="rounded-lg shadow">
                    <Segment><p className="flex justify-start font-semibold text-base text-gray-500">{resumes.coverLetter?.content}</p></Segment>
                  </div>
                </CardBody>
              
            </Card>
          </div>

          {/* Eğitim Bilgiler */}
          <div className="mr-16 mt-4 bg-white shadow-xl rounded-lg">
            <Card>
              <div className="flex flex-row ">
                <CardHeader>
                  <div className="flex flex-row ">
                    <Heading ml="8" size="md" mr="6" pt="2">
                      EĞİTİM BİLGİLERİ
                    </Heading>
                    <button className="border border-gray-300 hover:border-gray-600 hover:bg-gray-100  shadow0 rounded-full border-black">
                      {" "}
                      <div className="flex flex-row">
                        <BsPlusCircle className="mt-2 ml-2 text-gray-500" />
                        <p className="py-1 px-1 mr-2 text-base text-gray-500 font-semibold">
                          Yeni eğitim bilgisi ekle
                        </p>
                      </div>
                    </button>
                  </div>
                  <div className="divider " />
                </CardHeader>
              </div>

              <CardBody>
                {resumes.educations?.map((education) => (
                  <div
                    key={education.education?.id}
                    className="grid grid-cols-3 gap-4 mb-10 mt-10"
                  >
                    <div className="flex justify-center mr-28">
                      <Image
                        ml="6"
                        boxSize="60px"
                        objectFit="cover"
                        src="https://aday-asset.mncdn.com/img/university-default.png"
                      />
                    </div>
                    <div className="col-span-2">
                      <div className="grid gap-x-8 gap-y-4 grid-cols-3">
                        <div>
                          <p className="flex justify-start text-base font-normal text-gray-500">
                            Üniversite
                          </p>
                          <p className="flex justify-start font-semibold text-lg text-black">
                            {education.nameOfEducationalInstitution}
                          </p>
                        </div>
                        <div>
                          <p className="text-base font-normal text-gray-500">
                            Bölüm
                          </p>
                          <p className="font-semibold text-lg text-black">
                            {education.department}
                          </p>
                        </div>
                        <div>
                          <p className="flex jusify-end text-base font-normal text-gray-500">
                            Başlangıç Tarihi
                          </p>
                          <p className="flex jusify-end font-semibold text-lg text-black">
                            {education.startingDate}
                          </p>
                        </div>

                        <div>
                          <p className="flex justify-start text-base font-normal text-gray-500">
                            Mezuniyet Tarihi
                          </p>
                          <p className="flex justify-start font-semibold text-lg text-black">
                            {education.graduationDate}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="container divider" />
                  </div>
                ))}
              </CardBody>
            </Card>
          </div>

          {/* İş Deneyimi */}
          <div className="mr-16 mt-4 bg-white shadow-xl rounded-lg">
            <Card>
              <div className="flex flex-row">
                <CardHeader>
                  <div className="flex flex-row ">
                    <Heading ml="8" size="md" mr="8" pt="2">
                      İŞ DENEYİMLERİ
                    </Heading>
                    <button className="border  border-gray-300 hover:border-gray-600 hover:bg-gray-100  shadow rounded-full border-black">
                      {" "}
                      <div className="flex flex-row">
                        <BsPlusCircle className="mt-2 ml-2 text-gray-500" />
                        <p className="py-1 px-1 mr-2 text-base text-gray-500 font-semibold">
                          Yeni iş deneyimi ekle
                        </p>
                      </div>
                    </button>
                  </div>
                  <div className="divider " />
                </CardHeader>
              </div>

              <CardBody>
                {resumes.experiences?.map((experience) => (
                  <div
                    key={experience.experience?.id}
                    className="grid grid-cols-3 gap-4 mb-10 mt-10"
                  >
                    <div className="flex justify-center mr-28">
                      <Image
                        ml="6"
                        boxSize="60px"
                        objectFit="cover"
                        src="https://aday-asset.mncdn.com/img/firma-logosuz.png"
                      />
                    </div>
                    <div className="col-span-2">
                      <div className="grid gap-x-8 gap-y-4 grid-cols-3">
                        <div>
                          <p className="flex justify-start text-base font-normal text-gray-500">
                            Şirket
                          </p>
                          <p className="flex justify-start font-semibold text-lg text-black">
                            {experience.companyName}
                          </p>
                        </div>
                        <div>
                          <p className="flex justify-start text-base font-normal text-gray-500">
                            Departman
                          </p>
                          <p className="flex justify-start font-semibold text-lg text-black">
                            {" "}
                            {experience.jobTitle.title}
                          </p>
                        </div>
                        <div>
                          <p className="flex jusify-end text-base font-normal text-gray-500">
                            İşe Başlama Tarihi
                          </p>
                          <p className="flex jusify-end font-semibold text-lg text-black">
                            {experience.startingDate}
                          </p>
                        </div>

                        <div>
                          <p className="flex justify-start text-base font-normal text-gray-500">
                            İşten Çıkış Tarihi
                          </p>
                          <p className="flex justify-start font-semibold text-lg text-black">
                            {experience.terminationDate}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="container divider" />
                  </div>
                ))}
              </CardBody>
            </Card>
          </div>

          {/* DilBilgisi */}
          <div className="mr-16 mt-4 bg-white shadow-xl rounded-lg">
            <Card>
              <div className="flex flex-row">
                <CardHeader>
                  <div className="flex flex-row ">
                    <Heading ml="8" size="md" mr="14" pt="2">
                      YABANCI DİL
                    </Heading>
                    <button className="border  border-gray-300 hover:border-gray-600 hover:bg-gray-100  shadow rounded-full border-black">
                      {" "}
                      <div className="flex flex-row">
                        <BsPlusCircle className="mt-2 ml-2 text-gray-500" />
                        <p className="py-1 px-1 mr-2 text-base text-gray-500 font-semibold">
                          Yabancı dil Bilgisi Ekle
                        </p>
                      </div>
                    </button>
                  </div>
                  <div className="divider " />
                </CardHeader>
              </div>

              {resumes.languageLevels?.map((language) => (
                <CardBody key={language.language?.id}>
                  <div className="flex">
                    <div className="flex-row">
                      {" "}
                      <Image
                        ml="6"
                        boxSize="85px"
                        objectFit="cover"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXo3eQBlsfnPedzYRt69IMuFybUqYZ5KiB4w&usqp=CAU"
                      />
                    </div>
                    <div className="justfiy-center">
                      <Stack divider={<StackDivider />} ml="8" spacing="4">
                        <div className="flex flex-row mt-6">
                          <Box ml="18">
                            <p className="flex justify-start">Dil</p>
                            <p className="flex justify-start font-semibold text-lg text-black">
                              {language.language?.language}
                            </p>
                          </Box>
                          <Box ml="64">
                            <p className="flex justify-start">Seviye</p>
                            <p className="flex justify-start font-semibold text-lg text-black">
                              {language.level?.level}
                            </p>
                          </Box>
                        </div>
                      </Stack>
                    </div>
                  </div>
                </CardBody>
              ))}
            </Card>
          </div>

          {/* Yetenekler */}
          <div className="mr-16 mt-4 mb-6 bg-white shadow-xl rounded-lg">
            <Card>
              <div className="flex flex-row">
                <CardHeader>
                  <div className="flex flex-row ">
                    <Heading ml="8" size="md" mr="14" pt="2">
                      YETENEKLER
                    </Heading>
                    <button className="border  border-gray-300 hover:border-gray-600 hover:bg-gray-100  shadow rounded-full border-black">
                      {" "}
                      <div className="flex flex-row">
                        <BsPlusCircle className="mt-2 ml-2 text-gray-500" />
                        <p className="py-1 px-1 mr-2 text-base text-gray-500 font-semibold">
                          Yeni yetenek bilgisi ekle
                        </p>
                      </div>
                    </button>
                  </div>
                  <div className="divider " />
                </CardHeader>
              </div>
              <div className="flex flex-row">
                {resumes.skills?.map((skill) => (
                  <div key={skill.skill?.id} className="mx-3 mb-3 mt-2">
                    <div className=" border rounded-lg px-2 py-2 bg-purple-500 text-white hover:bg-white hover:text-purple-500 font-semibold">
                      {skill.skill}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Kullanıcı Bilgiler Ortak Son div */}
        </div>
      </div>

      {/* Ortak Son div*/}
    </div>
  );
}
