import { sdk } from "../sdk";

export const fetchCurrentUserStats = async (token: string) => {
    try {
        const response = await sdk({
            method: 'GET',
            url: '/users/statistics',
            headers: {
                'x-auth-token': token
            }
        });
        return response;
    } catch(err) {
        console.error(err);
    }
};