import React from "react";
import { useFormik } from "formik";
import validationSchema from "../Auth/validation";
import { fetchRegister } from "../service/CandidateService";
import {  useToasts } from 'react-toast-notifications';

export default function SignUp() {

  const { addToast } = useToasts();


  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      const {success} = await fetchRegister(values);
      if(success==false) {
        addToast("E-posta veya Kimlik Numarası Sistemde Kayıtlı. Kontrol ettikten sonra tekrar deneyiniz.",{appearance:"error"});
      }else{
        addToast("Başarılı bir şekilde kayıt oldunuz. Lütfen giriş yapınız.",{appearance:"success"});
      }
      console.log(success);
    },
  });

  return (
    <div>
      <div class="grid grid-rows-3 grid-flow-col gap-4">
        <div class="row-span-3 ">
          <img src="https://aday-asset.mncdn.com/img/responsive/userprocess/register.jpg" />
        </div>

        <div className="w-full max-w-lg ml-10">
          <div class="w-full max-w-lg">
            <div class="col-span-2 ...">
              <img
                className="ml-44 mt-10"
                src="https://aday-spage.mncdn.com/Knet_img_KnetLogo.ae2b40d.svg?v=p1006152329491"
              />
              <h2 className="mt-2 ml-4 font-bold text w-full">
                Yeni Üyelik Oluştur
              </h2>
              <h5 className="mt-2 ml-4 w-full">
                Zaten üye misin? Üye girişi yap
              </h5>
              <button className="border bg-primary text-white text-2xl w-full h-12 font-semibold  rounded ml-10  ">
                FACEBOOK İLE ÜYE OL
              </button>
              <div className="divider w-full ml-10 pt-2"></div>
            </div>
          </div>
        </div>

        <div class="row-span-2 col-span-2 ml-14  ...">
          <form onSubmit={formik.handleSubmit} class="w-full max-w-lg ">
            <div class="flex flex-wrap -mx-3 ">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="firstName"
                ></label>
                <input
                  class=" placeholder:text-sm appearance-none block w-full bg-natural text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
                  id="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  placeholder="İsim"
                  isInvalid={true}
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="lastName"
                ></label>
                <input
                  class="placeholder:text-sm appearance-none block w-full bg-natural text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="lastName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  placeholder="Soyisim"
                />
              </div>

              <div class="w-full md:w-1/2 px-3 mb-4">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="dateOfBirth"
                ></label>
                <input
                  class="placeholder:text-sm appearance-none block w-full bg-natural text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="dateOfBirth"
                  type="String"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dateOfBirth}
                  placeholder="Doğum Tarihi 'YYYY-AA-GG'"
                />
              </div>

              <div class="w-full md:w-1/2 px-3 mb-4">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="identityNumber"
                ></label>
                <input
                  class="placeholder:text-sm appearance-none block w-full bg-natural text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="identityNumber"
                  type="String"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.identityNumber}
                  placeholder="Kimlik Numarası"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 ">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="email"
                ></label>
                <input
                  class="placeholder:text-sm appearance-none block w-full bg-natural text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder="E-posta adresi"
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 ">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="password"
                ></label>
                <input
                  class="placeholder:text-sm appearance-none block w-full bg-natural text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  placeholder="Şifre"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 pt-2 ">
              <div class="w-full px-3">
                <button
                  type="submit"
                  className="border bg-purple-600 hover:bg-purple-700 w-full h-14 rounded text-white font-semibold text-lg"
                >
                  ÜYELİĞİNİ OLUŞTUR
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}