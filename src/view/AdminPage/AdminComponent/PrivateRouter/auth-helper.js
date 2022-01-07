const auth = {
  isAdmined() {
    if (typeof window == "undefined") return false;

    if (localStorage.getItem("token")) return true;
    else return false;
  },
  // isUser() {
  //   if (typeof window == "undefined") return false;

  //   if (localStorage.getItem("token")) return true;
  //   else return false;
  // },
};

export default auth;
