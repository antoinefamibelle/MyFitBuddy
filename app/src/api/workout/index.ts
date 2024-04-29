import { ResponseRo, WorkoutRo } from "@/lib/types";
import { sdk } from "../sdk";

export const fetchUserWorkoutsAPI = async (token: string): Promise<ResponseRo<WorkoutRo[]>> => {
    try {
        const response: ResponseRo<WorkoutRo[]> = await sdk({
            method: 'GET',
            url: '/workout/me',
            headers: {
                'x-auth-token': token
            }
        });
        return response;
    } catch(err) {
        console.error(err);
        return [] as unknown as ResponseRo<WorkoutRo[]>;
    }
};