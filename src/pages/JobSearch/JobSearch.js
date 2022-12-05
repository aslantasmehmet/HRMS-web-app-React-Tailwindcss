import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { CiFilter } from "react-icons/ci";
import JobPositionService from "../../service/JobPositionService";
import { Link } from "react-router-dom";
import {Pagination} from "semantic-ui-react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Checkbox,
} from "@chakra-ui/react";

export default function JobSearch() {
  let jobPositionService = new JobPositionService();

  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [numberOfData, setNumberOfData] = useState(0);
  let totalNumberOfPages = Math.ceil(
    numberOfData === 0 ? 1 : numberOfData / pageSize
  );

  useEffect(() => {
    jobPositionService
      .getAll(pageNo, pageSize)
      .then((result) => setPositions(result.data.data));
  }, [pageNo, pageSize, numberOfData]);

  const [query, setQuery] = useState("");
  const [positions, setPositions] = useState([]);

  return (
    <div>
      <Header />
      <div className="border h-20 w-full shadow border-x-stone-50">
        <div className="flex flex-row ml-32">
          <label className="mr-2 mt-3 ">
            <input
              placeholder="Pozisyon veya Şirket ara"
              className="placeholder:text-left h-12 w-96 px-4 border  w-full transition-colors hover:border-purple-500 outline-none peer text-sm "
              name="search"
              type="text"
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <label className="mr-2 mt-3">
            <input
              placeholder="Şehir veya İlçe ara"
              className="placeholder:text-left h-12 px-4 border  w-full transition-colors hover:border-purple-500 outline-none peer text-sm "
              name="search"
              type="text"
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <label>
            <button className="mt-3 bg-purple-700 text-white transition-color hover:border-purple-500 hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-36 text-sm font-semibold ">
              <CiFilter className="pr-2" size={30} /> FİLTRELE
            </button>
          </label>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 bg-gray-50 ">
        <div className="w-full h-full">
          <div className="border  rounded shadow ml-32 mt-8  bg-white">
            <h3 className="text-left font-semibold text-black ml-4 mt-4">
              Ülke /Şehir
            </h3>
            <div className=" mt-2 ml-1 ">
              <select class="border border-slate-500 w-72 h-10 rounded-none w-full ">
                <option>Türkiye</option>
                <option>Kıbrıs</option>
                <option>Yurt Dışı</option>
              </select>
            </div>

            <div className=" my-2 ml-1 ">
              <select class="border border-slate-500 w-72 h-10 rounded-none w-full ">
                <option className="divide">Şehir seçin</option>
                {positions.map((city) => (
                  <option key={city.id}>{city.city?.city}</option>
                ))}
              </select>
            </div>
            <div className="flex justify-start ml-10 mt-3 mb-4">
              <Checkbox size="lg">Uzaktan Çalışma</Checkbox>
            </div>

            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Şirket Sektörü
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div className="flex justify-start">
                    <Checkbox>Checkbox</Checkbox>
                  </div>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Pozisyon Seviyesi
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div className="flex justify-start">
                    <Checkbox>Checkbox</Checkbox>
                  </div>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Departman
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div className="flex justify-start">
                    <Checkbox>Checkbox</Checkbox>
                  </div>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Çalışma Şekli
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div className="flex justify-start">
                    <Checkbox>Checkbox</Checkbox>
                  </div>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Eğitim Seviyesi
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div className="flex justify-start">
                    <Checkbox>Checkbox</Checkbox>
                  </div>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Pozisyon
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div className="flex justify-start">
                    <Checkbox>Checkbox</Checkbox>
                  </div>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Deneyim Seviyesi
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div className="flex justify-start">
                    <Checkbox>Checkbox</Checkbox>
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <label>
              <button className="mt-6 mb-10 bg-purple-700 text-white transition-color hover:border-purple-500 hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-64 text-sm font-semibold ">
                Uygula
              </button>
            </label>
          </div>
        </div>

        {/* JobPostings */}

        <div className="col-span-2 mr-32 mt-9">
          {positions
            .filter(
              (position) =>
                (position.jobTitle?.title).toLowerCase().includes(query) ||
                (position.employer?.companyName)
                  .toLowerCase()
                  .includes(query) ||
                (position.city?.city).toLowerCase().includes(query)
            )
            .map((position) => (
              <div
                key={position.id}
                className="border w-full h-44 rounded shadow hover:shadow-2xl mb-3  bg-white "
              >
                <div className="flex flex-row">
                  <div className="border rounded-lg shadow-md w-24 h-24 mt-4 ml-4 ">
                    <img
                      className="mt-8 rounded-lg"
                      src={position.image?.url}
                    />
                  </div>
                  <Link to={`/ilan/${position.employer.companyName}`}>
                    <div className="flex flex-col text-lg mt-4 ml-8">
                      <div className="text-left font-semibold ">
                        {position.jobTitle?.title}
                      </div>
                      <div className="text-left text-base">
                        {position.employer?.companyName}
                      </div>
                      <div className="text-left text-sm text-gray-500">
                        {position.city?.city}
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="grid gap-4 grid-cols-2 mt-4 ">
                  <div className="flex justify-start border w-24 bg-gray-100 text-gray-600 rounded ml-5">
                    {position.workingTime?.time}
                  </div>
                  <div className="flex justify-end mr-5 text-gray-400 ">
                    37 gün önce{" "}
                  </div>
                </div>
              </div>
            ))}
            <Pagination/>
        </div>
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}
