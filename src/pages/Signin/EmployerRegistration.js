import React from "react";
import { NavLink } from "react-router-dom";
import { MdDone } from "react-icons/md";
import { Checkbox, Stack } from "@chakra-ui/react";
import * as Yup from "yup";
import { useToasts } from "react-toast-notifications";
import { useFormik } from "formik";
import { fetchRegister } from "../../service/EmployerService";

export default function EmployerRegistration() {
  const { addToast } = useToasts();
  const employerRegisterSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .required("Şirkete ait telefon numarasını giriniz.")
      .length(11, "Telefon numarası 11 haenli olmalıdır."),
    email: Yup.string().email().required("Geçerli Bir e-mail giriniz."),
    companyName: Yup.string().required("Lütfen şirket adınızı giriniz."),
    webAddress: Yup.string().required(
      "Şirkete ait web sitesi adresini giriniz."
    ),
    password: Yup.string()
      .min(5, " Parolanız min. 5 katakter içermelidir")
      .required("Lütfen kullanmak istediğiniz parolanızı giriniz."),
  });

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      email: "",
      companyName: "",
      password: "",
      webAddress: "",
    },
    validationSchema: employerRegisterSchema,
    onSubmit: async (values, bag) => {
      const { success } = await fetchRegister(values);
      if (success == false) {
        addToast(
          "Girilen bilgiler hatalıdır! Lütfen, kontrol edip tekrar deneyiniz.",
          { appearance: "error" }
        );
      } else {
        addToast(
          "Kayıt işlemi başarılı bir şekilde gerçekleşmiştir. Lütfen email adresine gelen linke tıklayarak üyeliğinizi aktif hale getiriniz.",
          {
            appearance: "success",
          }
        );
      }
    },
  });

  return (
    <div>
      <div className="bg-white ">
        <div className="h-16 container mx-auto  ">
          <div className="flex justify-between">
            <div className="flex justify-start">
              <div>
                <a href="http://localhost:3000/">
                  <img
                    className="pt-3.5 pr-8 cursor-pointer"
                    src="https://aday-spage.mncdn.com/Knet_img_KnetLogo.ae2b40d.svg?v=p0930095816756"
                  />
                </a>
              </div>
            </div>
            <div className="ml-96 pt-3.5 flex justify-end ">
              <>
                <div className="ml-72">
                  <NavLink to={"/isveren/giris"}>
                    <button className="text-xl font-semibold text-slate-500 hover:underline">
                      Üye Girişi
                    </button>
                  </NavLink>
                  <NavLink to={"/isveren/kayıt"}>
                    <button className=" ml-5 hover:bg-brand-color  hover:text-white border border-brand-color rounded-lg h-10 w-40 text-brand-color font-semibold duration-200">
                      İlan Satın Al
                    </button>
                  </NavLink>
                </div>
              </>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="bg-brand-color w-full h-96 grid grid-cols-3 gap-4">
        <div className="col-span-2 ">
          <div className="flex-col">
            <img
              className="w-56 h-15 pt-10 ml-32"
              src="https://img-kariyer.mncdn.com/sirius/images/logo-white@3x.png"
            />

            <div className="text-left text-white text-3xl font-normal ml-32 pt-10">
              Türkiye’nin en çok kullanılan Aday Takip
            </div>
            <div className="flex justify-start ml-32">
              <div className="text-left text-white text-3xl font-normal mr-2">
                Sistemi’ni
              </div>
              <div className="text-left font-bold text-white text-3xl">
                1 yıl ücretsiz deneyin!
              </div>
            </div>
            <div className="text-left flex justify-start text-white text-xl ml-32 mt-4">
              <MdDone className="mr-2" size={25} />
              İlanınızı 5 gün boyunca ücretsiz yayınlayın
            </div>
            <div className="text-left flex justify-start text-white text-xl ml-32 mt-2">
              <MdDone className="mr-2" size={25} />
              Başvuruları 30 gün boyunca görüntüleyin
            </div>
            <div className="text-left flex justify-start text-white text-xl ml-32 mt-2">
              <MdDone className="mr-2" size={25} />
              25 milyon özgeçmişe ulaşın
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className="card w-96 h-full my-20 rounded-lg ">
              <div className="flex flex-col">
                <div className="flex justify-center mt-6 text-2xl font-semibold">
                  Hemen Kayıt Olun!
                </div>
                <div>
                  <label className="relative ">
                    <input
                      className="mt-2 placeholder:text-left h-14 w-80 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-purple-500 outline-none peer text-sm "
                      id="companyName"
                      type="text"
                      placeholder="Şirket Adı"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.companyName}
                    />
                    {formik.touched.companyName && formik.errors.companyName ? (
                      <div className="error_msg text-rose-500 text-sm flex justify-start">
                        {formik.errors.companyName}
                      </div>
                    ) : null}
                  </label>
                  <label className="relative ">
                    <input
                      className="mt-2 placeholder:text-left h-14 w-80 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-purple-500 outline-none peer text-sm "
                      id="phoneNumber"
                      type="text"
                      placeholder="Telefon"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phoneNumber}
                    />
                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                      <div className="error_msg text-rose-500 text-sm flex justify-start ">
                        {formik.errors.phoneNumber}
                      </div>
                    ) : null}
                  </label>
                  <label className="relative mt-1">
                    <input
                      required
                      className=" mt-3 placeholder:text-left h-14 w-80 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-purple-500 outline-none peer text-sm "
                      id="webAddress"
                      type="text"
                      placeholder="Web Site"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.webAddress}
                    />
                    {formik.touched.webAddress && formik.errors.webAddress ? (
                      <div className="error_msg text-rose-500 text-sm flex justify-start">
                        {formik.errors.webAddress}
                      </div>
                    ) : null}
                  </label>

                  <label className="relative ">
                    <input
                      className="mt-2 placeholder:text-left h-14 w-80 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-purple-500 outline-none peer text-sm "
                      id="email"
                      type="text"
                      placeholder="E-posta"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="error_msg text-rose-500 text-sm flex justify-start">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </label>

                  {/* <div className="flex justify-start mt-2 ml-8 ">
                   <div className=" mr-2"> <Select placeholder="İl" size="lg" borderColor='gray.200' border='2px' textColor='gray.400' >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select></div>
                 <div className="hover:border-brand-color">  <Select placeholder="İlçe" size="lg" borderColor='gray.200' border='2px' textColor='gray.400' >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select></div> 
                  </div>
                  <div className="flex justify-start mt-2 ml-8 ">
                   <div className=" mr-2"> <Select placeholder="Vergi Dairesi İli" size="lg" borderColor='gray.200' border='2px' textColor='gray.400' >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select></div>
                 <div className="hover:border-brand-color"> 
                  <Select placeholder="Vergi Dairesi Seçiniz" size="lg" borderColor='gray.200' border='2px' textColor='gray.400' >
                      <option value="option1">Option 1</option>
                    </Select></div> 
                  </div> */}
                  <label className="relative ">
                    <input
                      className="mt-2 placeholder:text-left h-14 w-80 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-purple-500 outline-none peer text-sm "
                      id="password"
                      type="password"
                      placeholder="Parola"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div className="error_msg text-rose-500 text-sm flex justify-start mt-3 ">
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </label>

                  <Stack
                    spacing={10}
                    direction="row"
                    mb="6px"
                    ml="28px"
                    mt="8px"
                  >
                    <Checkbox colorScheme="purple" defaultChecked>
                      <p className="text-slate-400 text-base font-semibold text-left mt-3">
                        İletişim bilgilerime e-ileti gönderilmesine izin
                        veriyorum.
                      </p>
                    </Checkbox>
                  </Stack>
                  <Stack spacing={10} direction="row" ml="28px">
                    <Checkbox colorScheme="purple" defaultChecked>
                      <p className="text-slate-400 text-base font-semibold text-left mt-3">
                        Kişisel verilerin işlenmesine ait KVKK Aydınlatma
                        Metnini okudum.
                      </p>
                    </Checkbox>
                  </Stack>

                  <button
                    type="submit"
                    className="mt-3 mb-3 border bg-brand-color  hover:bg-purple-800 font-semibold text-white text-lg w-80 h-14 rounded "
                  >
                    Kaytı Ol
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
