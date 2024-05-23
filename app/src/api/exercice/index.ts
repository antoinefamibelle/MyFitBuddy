import { ExerciceRo, ResponseRo } from "@/lib/types";
import { sdk } from "../sdk";

export const fetchExercises = async (token: string): Promise<ResponseRo<ExerciceRo[]>> => {
    try {
        console.log('AQUI')
        const response: ResponseRo<ExerciceRo[]> = await sdk({
            method: 'GET',
            url: '/exo',
            headers: {
                'x-auth-token': token
            }
        });
        return response;
    } catch(err) {
        console.error(err);
        return [] as unknown as ResponseRo<ExerciceRo[]>;
    }
};