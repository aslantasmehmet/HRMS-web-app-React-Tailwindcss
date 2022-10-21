import * as yup from "yup";

const validation = yup.object().shape({
  firstName: yup
  .string()
  .required("Zorunlu Alan"),
  lastName: yup
  .string()
  .required("Zorunlu Alan"),
  email: yup
    .string()
    .email("Geçerli Bir Email Giriniz.")
    .required("Zorunlu Alan"),
  password: yup
    .string()
    .min(5, "Parolanız en az 5 karakter olmalıdır.")
    .required(),
});
export default validation;
