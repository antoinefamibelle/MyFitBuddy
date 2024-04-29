import { ExerciceRo } from '../exercice';

export type WorkoutRo = {
    id: string;
    name: string;
    description?: string;
    duration?: number;
    difficulty?: string;
    exercices: Array<ExerciceRo>;
    createdAt: Date;
    updatedAt: Date;
};

export type createWorkoutDto = {
    name: string;
    description?: string;
    duration?: number;
    difficulty?: string;
    exercices: Array<string>;
};