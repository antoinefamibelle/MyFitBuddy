import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectValue, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectSeparator } from "@/components/ui/select";
import { CircleX } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useSportyStore } from "@/store";
import { fetchExercises } from "@/api";
import { ExerciceRo } from "@/lib/types";
import { ExerciceCard } from "@/components/custom";
const background = `https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

const Difficulty = [
  'begginer',
  'intermediate',
  'advanced',
];

export function WorkoutPage() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [workoutName, setWorkoutName] = useState<string>("");
  const [workoutDescription, setWorkoutDescription] = useState<string>("");
  const [workoutDuration, setWorkoutDuration] = useState<number>(0);
  const [workoutDifficulty, setWorkoutDifficulty] = useState<'begginer' | 'intermediate' | 'advanced'>('begginer');
  const [exoList, setExoList] = useState<ExerciceRo[]>([]);
  const [selectedExo, setSelectedExo] = useState<string[]>([]);

  const { user } = useSportyStore(state => ({
    user: state.user,
  }));

  const getExercice = async () => {
    try {
      const response = await fetchExercises(user.token);
      console.log('RESPONSE : ', response);

      if (response && response.status_code === 200) {
        console.log('EXO : ', response.data);
        setExoList(response.data);
      }
    } catch(err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getExercice();
  },[modalOpen]);

  if (modalOpen) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="container bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 text-card-foreground shadow-sm h-screen w-screen p-4 rounded-xl">
          <div className="grid grid-cols-3">
            <div> </div>
            <div>
              <p className="text-lg font-bold text-center text-black">NEW WORKOUT</p>
            </div>
            <div>
              <Button
                onClick={() => setModalOpen(false)}
                className="text-primary-foreground bg-transparent"
              >
               <CircleX />
              </Button>
            </div>
          </div>
          
          <div className='overflow-y-auto h-full'>
            <span className="text-white text-lg font-bold">Workout Details</span>
            
            <Input
              placeholder="Enter workout name"
              className="mt-4"
              value={workoutName}
              onChange={(e) => setWorkoutName(e.target.value)}
            />

            <Textarea
              placeholder="Enter workout description"
              className="mt-4"
              rows={5}
              value={workoutDescription}
              onChange={(e) => setWorkoutDescription(e.target.value)}
            />

            <div className='grid grid-cols-2 mt-4 gap-4 '>
              <Input
                type='number'
                placeholder="Enter workout duration in minutes"
                value={workoutDuration}
                onChange={(e) => setWorkoutDuration(parseInt(e.target.value))}
              />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Difficulty"  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Difficulty</SelectLabel>
                    {Difficulty.map((item) => ( 
                      <SelectItem
                        key={item}
                        value={item}
                        onSelect={() => setWorkoutDifficulty(item as 'begginer' | 'intermediate' | 'advanced')}
                      >
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <p>{exoList.length}</p>
            {exoList.length > 0 && (
              <div className='mt-4'>
                <span className="text-white text-lg font-bold">Exercices</span>
                <div className='grid gap-2'>
                  {exoList.map((exo) => (
                    <ExerciceCard exo={exo} key={exo.id} onClick={() => setSelectedExo([...selectedExo, exo._id])} />
                  ))}
                </div>
              </div>
            )}

          </div>
          
        </div>
      </div>
    );
  }
  
  return (
    <div className="h-screen mx-2 mt-2 ">
      <div className="flex h-2/6 rounded-xl px-16 flex-col items-end" style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
      }}>
        <div className="bg-white h-10 w-full rounded-xl justify-center text-center">
          <p className="text-black text-2xl font-bold text-center justify-center">Workout</p>
        </div>
      </div>
      <div>
        <div className="fixed bottom-14 flex justify-center w-screen">
          <Button onClick={() => setModalOpen(true)} className='p-4 bg-gray-500 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100'>
            <p className="text-white text-2xl font-bold text-center">Create a new workout</p>
          </Button>
        </div>
      </div>
    </div>
  );
}