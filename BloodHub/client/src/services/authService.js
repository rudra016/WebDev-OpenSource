import { userLogin, userRegister } from "../redux/features/auth/authAction";
import store from "../redux/store";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return alert("empty");
    }
    store.dispatch(userLogin({ role, email, password }));
  } catch (err) {
    console.log(err);
  }
};

export const handleRegister = ( e, name, role, email, password, organisationName, hospitalName, website, address, phone ) => {
  e.preventDefault();
  try {
    store.dispatch(
      userRegister({ name, role, email, password, organisationName, hospitalName, website, address, phone, })
    );
  } catch (err) {
    console.log(err);
  }
};
