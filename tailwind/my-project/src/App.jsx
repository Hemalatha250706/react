// import Table from './table'
// function App(){
//   return (
//     <div>

//       <div className="min-h-screen bg-orange-500 flex flex-col items-center justify-center">
//       <h1 className="text-2xl font-bold text-white" mb-6>
//         Tailwind Working!
//       </h1>
//       <Table
//             Id="1"
//             name="keerthiga"
//             age={21}
//             course="react"
//             />  
    
    
//         <table/>

//       </div>
//     </div>
//   )
// }

// export default App
// import{useState} from "react";
// function App(){
//   const[count,setcount]=useState(0);
//   return(
//     <div>
//       <h1>{count}</h1>
//       <button
//       onClick={()=>setcount(count+1)}
//       >
//         Increment
//       </button>
//       <button
//       onClick={()=>setcount(count-1)}
//       >
//         Decrement
//       </button>
//     </div>
//   );
// }
// export default App;
import { useState } from "react";

function App() {
  const names = ["Hema", "Priya", "Divya", "Anu", "Kavi"];

  const [index, setIndex] = useState(0);

  return (
    <div>
      <h1>{names[index]}</h1>

     <button
  onClick={() => setIndex(index + 1)}
  disabled={index === names.length - 1}
>
  Next Name
</button>
    </div>
  );
}

export default App;