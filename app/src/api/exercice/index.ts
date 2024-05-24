import { ExerciceRo, ResponseRo } from "@/lib/types";
import { sdk } from "../sdk";

export const fetchExercises = async (token: string): Promise<ResponseRo<ExerciceRo[]>> => {
    try {
        const response = await sdk({
            method: 'GET',
            url: '/exo',
            headers: {
                'x-auth-token': token
            }
        });
        return response.data as ResponseRo<ExerciceRo[]>
    } catch(err) {
        console.error(err);
        return [] as unknown as ResponseRo<ExerciceRo[]>;
    }
};