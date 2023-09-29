import { ref } from "vue";
import axiosInstance from "@/utils/axiosInstance";
import router from "@/router";

export const useLogin = () => {
  const isEnable = ref(false);
  const userCredentials = ref({
    email: "test@example.com",
    password: "password",
  });

  const onSubmit = async (userData) => {
    try {
      const { data } = await axiosInstance.post("/auth/login", userData);
      // localStorage.setItem("user_token", data.token);
      router.push('/');
    } catch (error) {
      if (error.response) {
        console.log(error);
      }
      return error;
    }
  };

  return {
    userCredentials,
    isEnable,
    onSubmit,
  };
};
