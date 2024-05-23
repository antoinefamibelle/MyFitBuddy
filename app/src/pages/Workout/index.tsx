
const background = `https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

export function WorkoutPage() {
  return (
    <div className="h-screen mx-2 mt-2">
      <div className="flex h-2/6 rounded-xl px-2 flex-col items-end" style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
      }}>
        <div className="bg-yellow-200 h-10 w-full rounded-xl pl-4">
          <p className="text-white text-2xl font-bold text-start text-">Create a new workout</p>
        </div>
      </div>
      
    </div>
  );
}