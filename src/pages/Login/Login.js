import { useFormik } from "formik";
import { RiFacebookBoxFill } from "react-icons/ri";
import * as Yup from "yup";
import UserService from "../../service/UserService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../../store/actions/authActions";
import swal from "sweetalert";

export default function Login() {
  const navigate   = useNavigate ();

  const dispatch = useDispatch();

  const handleLogin = (user) => {
    dispatch(userLogin(user));
  };

  let userService = new UserService();

  const userLoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("E-mail cannot be empty!")
      .email("Geçerli bir email adresi giriniz."),
    password: Yup.string().required("Paralo girilmesi zorunludur."),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: userLoginSchema,
    onSubmit: (values) => {
      userService.login(values).then((result) => {
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
    <div className="w-full h-96 mb-64  bg-[url('https://aday-spage.mncdn.com/Knet_img_cizim.eb8015c.svg?v=p1006152329491')]">
      <div className="container mx-auto ml-96">
        {" "}
        <div class="card w-96  bg-base-100 shadow-xl ml-32  mt-6  ">
          <form onSubmit={formik.handleSubmit}>
            <div class="card-body">
              <h5>Aday Üye Girişi</h5>

              <label className="mr-2 flex-1 relative block" htmlFor="email">
                <input
                  className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-primary-brand-color outline-none peer text-sm pt-2 "
                  id="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder="Kullanıcı Adı veya E-posta"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error_msg">{formik.errors.email}</div>
                ) : null}
              </label>

              <label className="mr-2 flex-1 relative block" htmlFor="password">
                <input
                  className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-primary-brand-color outline-none peer text-sm pt-2 "
                  id="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  placeholder="Parola"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="error_msg">{formik.errors.password}</div>
                ) : null}
              </label>
            </div>

            <div className="flex justify-between">
              <div className="flex justify-start ml-4">
                <input type="checkbox" checked="" class="checkbox" />
                <p className="text-purple-600 ml-2">Beni Hatırla</p>
              </div>

              <div className="mr-6 text-purple-700">
                <p>Şifremi Unuttum</p>
              </div>
            </div>

            <div className="flex justify-center ">
              <button
                className="border bg-purple-700 h-12 text-white font-semibold mb-4 rounded w-80 hover:bg-purple-800"
                type="submit"
              >
                Giriş Yap
              </button>
            </div>

            <div className="divider container mb-4"> veya</div>

            <div className="flex justify-center">
              <button className="border border-primary  h-12 w-80 text-primary font-semibold rounded hover:bg-blue-500 mb-4  ">
                {" "}
                <div className="flex justify-center mt-2 hover:text-white ">
                  <RiFacebookBoxFill size={25} /> <p>Facebook ile Giriş Yap</p>
                </div>
              </button>
            </div>
          </form>
          <div className="flex flex-col">
            <p className="flex justify-center">
              Kariyer.net’te özgeçmişin yok mu?
            </p>
            <button className="flex justify-center">Hemen Üye Ol</button>
          </div>
        </div>
      </div>
    </div>
  );
}
