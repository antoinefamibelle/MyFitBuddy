import { ExerciceRo } from "@/lib/types";

interface Props {
    exo: ExerciceRo;
    onClick: (exo: ExerciceRo) => void;
    isSelected?: boolean;
    isSelectable?: boolean;
}

export const ExerciceCard = ({
    exo,
    onClick,
    isSelected,
    isSelectable,
}: Props) => {
    return (
        <div
            className={`flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ${
                isSelectable ? "cursor-pointer" : ""
            }`}
            onClick={() => isSelectable && onClick(exo)}
        >
            <img
                className="object-fit rounded-t-lg h-32"
                src={exo.image}
                alt={exo.name}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-xl text-start font-bold tracking-tight text-gray-900 dark:text-white">
                    {exo.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {exo.target} - {exo.secondaryMuscle}
                </p>
            </div>
        </div>
    );
};