import http from "../utils/httpClient";

class authService {
  registration = async (userName, userPass) => {
    debugger;
    return await http
      .post(`/api/Auth/registration`, {
        userName,
        userPass,
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => Promise.reject(err));
  };

  login = async (userName, userPass) => {
    debugger;
    return await http
      .post(`/api/auth/login`, {
        userName,
        userPass,
      })
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem(
          "token-expiration",
          Date.now() + 2 * 60 * 60 * 1000
        );

        return response.data;
      })
      .catch((err) => Promise.reject(err));
  };
}
export default new authService();
