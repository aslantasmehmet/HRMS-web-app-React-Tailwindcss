import React from "react";
import { useFormik } from "formik";
import validationSchema from "../../auth/validation";
import { fetchRegister } from "../../service/CandidateService";
import { useToasts } from "react-toast-notifications";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";

export default function İndex() {
  const { addToast } = useToasts();

  const userRegisterSchema = Yup.object().shape({
    firstName: Yup.string().required("Lütfen Adınızı Giriniz."),
    lastName: Yup.string().required("Lütfen Soyadınızı Giriniz."),
    dateOfBirth: Yup.date().required("Lütfen doğum tarihini giriniz."),
    identityNumber: Yup.string()
      .required("Lütfen kimlik numaranızı giriniz.")
      .length(11, "Kimlik numaranız 11 haneli olmalıdır."),
    email: Yup.string().email().required("Geçerli Bir e-mail giriniz."),
    password: Yup.string()
      .min(5, " Parolanız min. 5 katakter içermelidir")
      .required("Lütfen kullanmak istediğiniz parolanızı giriniz."),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: userRegisterSchema,
    onSubmit: async (values, bag) => {
      const { success } = await fetchRegister(values);
      if (success == false) {
        addToast(
          "E-posta veya Kimlik Numarası Sistemde Kayıtlı. Kontrol ettikten sonra tekrar deneyiniz.",
          { appearance: "error" }
        );
      } else {
        addToast("Başarılı bir şekilde kayıt oldunuz. Lütfen giriş yapınız.", {
          appearance: "success",
        });
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
              <NavLink to={"/"}>
                <img
                  className="ml-48 mt-10"
                  src="https://aday-spage.mncdn.com/Knet_img_KnetLogo.ae2b40d.svg?v=p1006152329491"
                />
              </NavLink>
              <h2 className="mt-4 ml-4 font-bold text w-full">
                Yeni Üyelik Oluştur
              </h2>
              <h5 className="mt-4 ml-4 w-full ">
                Zaten üye misin?
                <NavLink to={"/aday/giris"}>
                  <button className="text-purple-700 ml-2">
                    Üye girişi yap
                  </button>
                </NavLink>
              </h5>
              <button className="border bg-primary text-white text-2xl w-full h-12 font-semibold  rounded ml-6 mt-4  ">
                FACEBOOK İLE ÜYE OL
              </button>
              <div className="divider w-full ml-6 pt-10"></div>
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
                  class=" placeholder:text-sm appearance-none block w-full bg-natural text-gray-700 border-2 border-slate-300 shadow rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-300 "
                  id="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  placeholder="İsim"
                  isInvalid={true}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="error_msg text-rose-500 text-sm flex justify-start">
                    {formik.errors.firstName}
                  </div>
                ) : null}
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="lastName"
                ></label>
                <input
                  class="placeholder:text-sm appearance-none block w-full bg-natural text-gray-700 border-2 border-slate-300 shadow rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-pink-300"
                  id="lastName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  placeholder="Soyisim"
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="error_msg text-rose-500 text-sm flex justify-start mt-3">
                    {formik.errors.lastName}
                  </div>
                ) : null}
              </div>

              <div class="w-full md:w-1/2 px-3 mb-4">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="dateOfBirth"
                ></label>
                <input
                  class="placeholder:text-sm appearance-none block w-full bg-natural text-gray-700 border-2 border-slate-300 shadow rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-pink-300"
                  id="dateOfBirth"
                  type="String"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dateOfBirth}
                  placeholder="Doğum Tarihi 'YYYY-AA-GG'"
                />
                {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
                  <div className="error_msg text-rose-500 text-sm flex justify-start mt-3 ">
                    {formik.errors.dateOfBirth}
                  </div>
                ) : null}
              </div>

              <div class="w-full md:w-1/2 px-3 mb-4">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="identityNumber"
                ></label>
                <input
                  class="placeholder:text-sm appearance-none block w-full bg-natural text-gray-700 border-2 border-slate-300 shadow rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-pink-300"
                  id="identityNumber"
                  type="String"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.identityNumber}
                  placeholder="Kimlik Numarası"
                />
                {formik.touched.identityNumber &&
                formik.errors.identityNumber ? (
                  <div className="error_msg text-rose-500 text-sm flex justify-start mt-3">
                    {formik.errors.identityNumber}
                  </div>
                ) : null}
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 ">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="email"
                ></label>
                <input
                  class="placeholder:text-sm appearance-none block w-full bg-natural text-gray-700 border-2 border-slate-300 shadow rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-300"
                  id="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder="E-posta adresi"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error_msg text-rose-500 text-sm flex justify-start">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 ">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="password"
                ></label>
                <input
                  class="placeholder:text-sm appearance-none block w-full bg-natural text-gray-700 border-2 border-slate-300 shadow rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-pink-300"
                  id="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  placeholder="Şifre"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="error_msg text-rose-500 text-sm flex justify-start">
                    {formik.errors.password}
                  </div>
                ) : null}
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
