export type ExerciceRo = {
    id: string;
    bodyPart: string | null;
    name: string | null;
    image: string | null;
    target: string | null;
    secondaryMuscle: string[];
    instructions: string[];
    userId?: string | null;
    workoutId?: string | null;
}