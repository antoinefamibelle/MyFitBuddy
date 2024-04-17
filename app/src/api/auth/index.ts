import { sdk } from "../sdk";
import { UserLoginDto, UserCreateDto} from "@/lib/types";

export const authLogin = async (data: UserLoginDto) => {
  const response = await sdk({
    method: 'POST',
    url: '/users/auth/login',
    data: data
  });
  return response.data;
};

export const authRegister = async (data: UserCreateDto) => {
    const response = await sdk({
      method: 'POST',
      url: '/users/auth/register',
      data: data
    });
    return response.data;
  };