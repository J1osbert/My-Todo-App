/** @format */

// /** @format */
// import { BorderBeam } from "./magicui/border-beam";
// const TaskTracker = () => {
//   const taskCard = [
//     // {
//     //     id: 1,
//     //     title: "Task 1",
//     //     description: "This is task 1",
//     //     status: "Not Started",
//     //     dueDate: "2024-02-20",
//     //     priority: "High",
//     // }
//     {
//       id: 1,
//       counter: 394,
//       description: "Total Projects",
//       color: "#3498db"
//     },
//     {
//       id: 2,
//       counter: 130,
//       description: "On-Going Projects",
//       color: "#f1c40f"
//     },
//     {
//       id: 3,
//       counter: 210,
//       description: "Completed Projects",
//       color: "#2ecc71 "
//     },
//     {
//       id: 4,
//       counter: 54,
//       description: "Upcoming Projects",
//       color: "#f39c12"
//     }
//   ];
//   return (
//     <div className="grid grid-cols-4 gap-3 space-y-5 text-start">
//       {taskCard.map((item) => {
//         return (
//           <div
//             key={item.id}
//             className="bg-white rounded-3xl h-[100px] border p-2 pl-3"
//           >
//             <p
//               className="text-4xl font-bold "
//               style={{
//                 color: item.color
//               }}
//             >
//               {item.counter}
//             </p>
//             <p className="text-lg font-normal py-2">{item.description}</p>
//           </div>
//         );
//       })}
//       <BorderBeam duration={8} size={100} />
//     </div>
//   );
// };

// export default TaskTracker;

import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";

import { BorderBeam } from "./magicui/border-beam";

export function TaskTracker() {
  const taskCard = [
    // {
    //     id: 1,
    //     title: "Task 1",
    //     description: "This is task 1",
    //     status: "Not Started",
    //     dueDate: "2024-02-20",
    //     priority: "High",
    // }
    {
      id: 1,
      counter: 394,
      description: "Total Projects",
      color: "#3498db"
    },
    {
      id: 2,
      counter: 130,
      description: "On-Going Projects",
      color: "#f1c40f"
    },
    {
      id: 3,
      counter: 210,
      description: "Completed Projects",
      color: "#2ecc71 "
    },
    {
      id: 4,
      counter: 54,
      description: "Upcoming Projects",
      color: "#f39c12"
    }
  ];
  return (
    <div className="grid grid-cols-4 gap-3 space-y-5 text-start">
      {taskCard.map((item) => {
        return (
          <Card className="relative h-[100px] overflow-hidden py-2">
            <CardContent className="">
              <p
                className="text-4xl font-bold "
                style={{
                  color: item.color
                }}
              >
                {item.counter}
              </p>
              <p className="text-lg font-normal py-2">{item.description}</p>
            </CardContent>
            <BorderBeam duration={8} size={100} />
          </Card>
        );
      })}
    </div>
  );
}
