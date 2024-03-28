import React, { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import axios from "axios";

import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const FormSchema = z.object({
    muscle: z.string(),
    difficulty: z.string(),
    typeOfWorkout: z.string(), 
})

const muscleArray = [
    'abdominals',
    'abductors',
    'adductors',
    'biceps',
    'calves',
    'chest',
    'forearms',
    'glutes',
    'hamstrings',
    'lats',
    'lower_back',
    'middle_back',
    'neck',
    'quadriceps',
    'traps',
    'tricep',
];
  
type Muscle = typeof muscleArray[number];

const difficulties = [
    'beginner',
    'intermediate',
    'expert'
];

type Difficulty = typeof difficulties[number];

const typeOfWorkout = [
    'cardio',
    'olympic_weightlifting',
    'plyometrics',
    'powerlifting',
    'strength',
    'stretching',
    'strongman',
];

type TypeOfWorkout = typeof typeOfWorkout[number];

export const Homepage = () => {
    const [selectedMuscle, setSelectedMuscle] = useState<Muscle>('abdominals');
    const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('beginner');
    const [selectedTypeOfWorkout, setSelectedTypeOfWorkout] = useState<TypeOfWorkout>('cardio');
    const [listOfWorkouts, setListOfWorkouts] = useState([]);

    const isDesktop = window.innerWidth > 1024;
  
        <div>
            {/* {isDesktop && (
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
            )} */}
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
           <p>Selected muscle {selectedMuscle}</p>
            <p>Selected difficulty {selectedDifficulty}</p>
            <p>Selected type of workout {selectedTypeOfWorkout}</p>

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