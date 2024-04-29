import { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { muscleArray, difficulties, typeOfWorkout } from "@/constants";
import { AuthContext, LoadingContext } from "@/context";
import { sdk } from "@/api/sdk";
import { WorkoutRo } from "@/lib/types";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { fetchUserWorkoutsAPI } from "@/api";
  
type Muscle = typeof muscleArray[number];
type Difficulty = typeof difficulties[number];
type TypeOfWorkout = typeof typeOfWorkout[number];

export const Homepage = () => {
    const { user } = useContext(AuthContext);
    const { loading, setLoading } = useContext(LoadingContext);
    const [usersWorkouts, setUsersWorkouts] = useState<WorkoutRo[]>([]);
    const [newMember, setNewMember] = useState<boolean>(false);
    const [selectedMuscle, setSelectedMuscle] = useState<Muscle | undefined>(undefined);
    const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | undefined>(undefined);
    const [selectedTypeOfWorkout, setSelectedTypeOfWorkout] = useState<TypeOfWorkout | undefined>(undefined);
    const [listOfWorkouts, setListOfWorkouts] = useState([]);
    const isDesktop = window.innerWidth > 1024;

    const fetchUserWorkouts = async () => {
        try {
            console.log('USER : ', user);
            const response = await fetchUserWorkoutsAPI(user?.token as string);
            if (response.data.length === 0 && response.status_code === 200) {
                setNewMember(true);
            };
            setUsersWorkouts(response.data);
        } catch(err) {
            console.error(err);
        }
    };

    const fetchWorkout = async () => {
        try {
            const response = await sdk({
                method: 'GET',
                url: '/exo',
                headers: {
                    'x-auth-token': user?.token
                }, 
                params: {
                    muscle: selectedMuscle,
                    difficulty: selectedDifficulty,
                    type: selectedTypeOfWorkout
                },
            });
            console.log('RESPONSE : ', response.data);
            setListOfWorkouts(response.data.data);
        } catch(err) {
            console.error(err);
        }
    };

    useEffect(() => {
        setLoading(true);
        fetchUserWorkouts();
        setLoading(false);
    }, []);
    
    return(
        <div>
            { newMember && (
                <p>Welcome to the app, you can now start creating your first workout</p>
                
            )}
            {isDesktop && (
                <>
                    <p>Choose a muscle that you want to workout</p>
                    {muscleArray.map((muscle) => (
                        <Badge
                            key={muscle}
                            variant="outline"
                        >
                            {muscle}
                        </Badge>
                    ))}
                    <hr className="mt-4 mb-4" />
                    <p>Choose a difficulty</p>
                    {difficulties.map((difficulty) => (
                        <Badge
                            key={difficulty}
                            variant="outline"
                        >
                            {difficulty}
                        </Badge>
                    ))}
                    <hr className="mt-4 mb-4" />
                    <p className="text-black">Choose a type of workout</p>
                    {typeOfWorkout.map((type) => (
                        <Badge
                            key={type}
                            variant="outline"
                        >
                            {type}
                        </Badge>
                    ))}

                </>
            )}
            {!isDesktop && (
                <>
                <div>
                    <p>Choose a muscle that you want to workout</p>
                    <Select onValueChange={setSelectedMuscle} value={selectedMuscle}>
                        <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose a muscle that you want to workout" />
                        </SelectTrigger>
                        <SelectContent>
                            {muscleArray.map((muscle) => (
                                <SelectItem
                                    key={muscle}
                                    value={muscle}
                                    
                                >
                                    {muscle}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <p>Choose a difficulty</p>
                    <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty} >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Choose a difficulty" />
                        </SelectTrigger>
                        <SelectContent>
                            {difficulties.map((difficulty) => (
                                <SelectItem
                                    key={difficulty}
                                    value={difficulty}
                                >
                                    {difficulty}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <p>Choose a type of workout</p>
                    <Select value={selectedTypeOfWorkout} onValueChange={setSelectedTypeOfWorkout}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Choose a type of workout" />
                        </SelectTrigger>
                        <SelectContent>
                            {typeOfWorkout.map((type) => (
                                <SelectItem
                                    key={type}
                                    value={type}
                                >
                                    {type}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                </>
            )}

            {listOfWorkouts.map((workout: any) => (
                <Card className="w-[350px]">
                    <CardHeader>
                    <CardTitle>{workout.name}</CardTitle>
                    <CardDescription>{workout.instructions}</CardDescription>
                    </CardHeader>
                    <CardContent>
                    </CardContent>
                </Card>
            ))}
            <Button
                onClick={() => fetchWorkout()}
            >
                Get workout
            </Button>
        </div>
    );
};