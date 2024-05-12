import { useContext, useEffect, useState } from "react";
import { AuthContext, LoadingContext } from "@/context";
import { HealthCard, HealthIcon, WorkoutCard } from "./style";
import { fetchUserWorkoutsAPI, fetchCurrentUserStats } from "@/api";
import { useTheme } from "@/context/theme";
import { RulerIcon } from "lucide-react";
import { useSportyStore } from "@/store";

const image = `https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

export const Homepage = () => {
    const { user } = useSportyStore(state => ({
        user: state.user,
    }));
    const { loading, setLoading } = useContext(LoadingContext);
    const [newMember, setNewMember] = useState<boolean>(false);
    const { theme } = useTheme();
    const isDesktop = window.innerWidth > 1024;

    const getCurrentUserStats = async () => {
        try {
            console.log('USER : ', user.token)
            const response = await fetchCurrentUserStats(user?.token as string);
            console.log('RESPONSE : ', response.data);
        } catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {
        setLoading(true);
        getCurrentUserStats();
        setLoading(false);
    }, []);

    /**
     *     <div class="flex items-center flex-wrap max-w-md px-10 bg-white shadow-xl rounded-2xl h-20"
       x-data="{ circumference: 50 * 2 * Math.PI, percent: 80 }"
       >
          <div class="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full">
            <svg class="w-32 h-32 transform translate-x-1 translate-y-1" x-cloak aria-hidden="true">
              <circle
                class="text-gray-300"
                stroke-width="10"
                stroke="currentColor"
                fill="transparent"
                r="50"
                cx="60"
                cy="60"
                />
              <circle
                class="text-blue-600"
                stroke-width="10"
                :stroke-dasharray="circumference"
                :stroke-dashoffset="circumference - percent / 100 * circumference"
                stroke-linecap="round"
                stroke="currentColor"
                fill="transparent"
                r="50"
                cx="60"
                cy="60"
               />
            </svg>
            <span class="absolute text-2xl text-blue-700" x-text="`${percent}%`"></span>
          </div>
          <p class="ml-10 font-medium text-gray-600 sm:text-xl">Performance</p>

          <span class="ml-auto text-xl font-medium text-blue-600 hidden sm:block">+25%</span>
      </div>
    
    
     */
    
    return(
        <div className="mx-2 h-screen">
            <div className="h-full flex flex-col justify-between">
                <div className="flex h-2/6 w-full rounded-xl px-2 flex-col justify-center items-center" style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                }}>
                    <div className='p-4 bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100'>
                        <p className="text-white text-2xl font-bold text-center">MyFitBuddy</p>
                        <p className="text-white text-2xl font-bold text-center">{user?.firstName}.{user?.lastName[0]}</p>
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                        <p className="text-white text-xs font-thin">YOUR GOALS</p>
                    </div>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
                    <WorkoutCard>
                        <div className="relative size-40">
                        <svg className="size-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700" stroke-width="2"></circle>
                            <g className="origin-center -rotate-90 transform">
                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-600 dark:text-blue-500" stroke-width="2" stroke-dasharray="100" stroke-dashoffset={100-72}></circle>
                            </g>
                        </svg>
                        <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                            <p className="text-center text-2xl font-bold text-gray-800 ">72%</p>
                        </div>
                    </div>
                    </WorkoutCard>
                    <WorkoutCard>
                    <div className="relative size-40">
                        <svg className="size-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700" stroke-width="2"></circle>
                            <g className="origin-center -rotate-90 transform">
                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-600 dark:text-blue-500" stroke-width="2" stroke-dasharray="100" stroke-dashoffset="60"></circle>
                            </g>
                        </svg>
                        <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                            <p className="text-center text-2xl font-bold text-gray-800">1400 calories</p>
                        </div>
                        </div>
                    </WorkoutCard>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pb-16">
                    <div className="flex flex-row justify-between">
                        <p className="text-white text-xs font-thin">HEALTH METRICS</p>
                        <p className="text-white text-xs font-thin">SHOW MORE</p>
                    </div>
                    <HealthCard color="#BAE5EE">
                        <div className="flex flex-row">
                            <HealthIcon theme={theme}>
                                <RulerIcon size={24} />
                            </HealthIcon>
                            <div className="flex flex-col ml-4 flex-start">
                                <p className="text-lg font-bold text-black">Height</p>
                                <p className="text-start font-bold text-black">5'11"</p>
                            </div>
                        </div>
                    </HealthCard>
                    <HealthCard color="#CFE8BB">
                        <div className="flex flex-row">
                            <HealthIcon theme={theme}>
                                <RulerIcon size={24} />
                            </HealthIcon>
                            <div className="flex flex-col ml-4 flex-start">
                                <p className="text-lg font-bold text-black">Weigth</p>
                                <p className="text-start font-bold text-black">85kg</p>
                            </div>
                        </div>
                    </HealthCard>
                    <HealthCard color="#FDE9A0">
                    <div className="flex flex-row">
                            <HealthIcon theme={theme}>
                                <RulerIcon size={24} />
                            </HealthIcon>
                            <div className="flex flex-col ml-4 flex-start">
                                <p className="text-lg font-bold text-black">Calories</p>
                                <p className="text-start font-bold text-black">1900</p>
                            </div>
                        </div>
                    </HealthCard>

                </div>
            </div>
        </div>
    );
};