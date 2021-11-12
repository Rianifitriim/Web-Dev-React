const validation = (values) => {
  let errors = {};

  const namaValidator = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  if (!values.nama) {
    errors.nama = "nama harus diisi";
  } else if (!values.nama.match(namaValidator)) {
    errors.nama = "nama harus berisi huruf";
  }
  if (!values.gender) {
    errors.gender = "gender harus diisi";
  }
  if (!values.email) {
    errors.email = "email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "email is invalid";
  }
  const passwordValidator =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!values.password) {
    errors.password = "password harus diisi";
  } else if (!values.password.match(passwordValidator)) {
    errors.password =
      "password harus berisi minimal 8 karakter, huruf besar, huruf kecil, angka, simbol";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "konfirmasi password harus diisi";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "konfirmasi password harus sama";
  }
  return errors;
};
export default validation;
