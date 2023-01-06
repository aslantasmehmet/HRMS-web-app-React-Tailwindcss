import React from "react";
import EmployerLoginHeader from "../../components/EmployerLoginHeader";
import { Checkbox, Stack } from "@chakra-ui/react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../../store/actions/authActions";
import EmployerService from "../../service/EmployerService";
import swal from "sweetalert";
import { useFormik } from "formik";

export default function EmployerLoginPage() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = (user) => {
    dispatch(userLogin(user));
  };

  let employerService = new EmployerService();

  const employerLoginSchema = Yup.object().shape({
    email: Yup.string().required("Geçerli bir email adresi giriniz.").email(),
    password: Yup.string().required("En az 3 karakter giriniz."),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: employerLoginSchema,
    onSubmit: (values) => {
      employerService.login(values).then((result) => {
        if (result.data.success == true) {
          handleLogin(result.data.data);
          navigate("/");
          swal({
            title: "Succeed!",
            text: result.data.message,
            icon: "success",
            button: "Ok",
          });
        } else {
          swal({
            title: "Login is Unsuccessful!",
            text: result.data.message,
            icon: "error",
            button: "Ok",
          });
        }
      });
    },
  });
  return (
    <>
      <EmployerLoginHeader />
      <div className="bg-brand-color w-full ">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 ml-32 mt-4">
            <div>
              <img src="https://www.kariyer.net/__sirius/img/7ffaae2.svg" />
            </div>
            <div>
              <img src="https://tpc.googlesyndication.com/simgad/13920219508435995233" />
            </div>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="card w-96 h-full my-20 rounded-lg ">
              <div className="flex flex-col">
                <div className="flex justify-center mt-6 text-2xl font-semibold">
                  İşveren Girişi
                </div>

                <div>
                  <label className="relative mt-3" htmlFor="email">
                    <input
                      className=" mt-2 placeholder:text-left h-14 w-80 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-purple-500 outline-none peer text-sm "
                      id="email"
                      type="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      placeholder="Kullanıcı Adı veya E-posta"
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="error_msg text-rose-500 text-sm flex justify-start">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </label>
                  <label className="relative mt-3" htmlFor="password">
                    <input
                      className="  placeholder:text-left h-14 w-80 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-purple-500 outline-none peer text-sm "
                      id="password"
                      type="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      placeholder="Parola"
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div className="error_msg text-rose-500 text-sm flex justify-start">
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </label>
                  <div className="flex mt-3">
                    <div className="ml-8 justify-start">
                      <Stack spacing={10} direction="row">
                        <Checkbox colorScheme="purple" defaultChecked>
                          <p className="text-purple-600 text-base font-semibold">
                            Beni Hatırla
                          </p>
                        </Checkbox>
                      </Stack>
                    </div>
                    <div className=" ml-20 justify-end">
                      <p className="ml-4 text-purple-600 text-base font-semibold">
                        Şifemi Unutum
                      </p>
                    </div>
                  </div>
                  <button
                    className="mt-3 border bg-brand-color  hover:bg-purple-800 font-semibold text-white text-lg w-80 h-14 rounded "
                    type="submit"
                  >
                    Giriş Yap
                  </button>
                  <p className="mt-10 flex justify-center text-slate-600 font-semibold">
                    Aradığınız yeteneklere hızlıca ulaşmak için
                  </p>
                  <button
                    onClick={"/"}
                    className="mb-6 text-brand-color font-bold text-lg"
                  >
                    Hemen Üye Olun
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
