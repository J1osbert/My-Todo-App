/** @format */

// /** @format */

// import "./App.css";
// import DashboardSection from "./components/dashboard";
// import NavBarSection from "./components/navbar";

// function App() {
//   return (
//     <div className="bg-amber-50">
//       <NavBarSection />
//       <DashboardSection />
//     </div>
//   );
// }

// export default App;
/** @format */
import "./App.css";
import DashboardSection from "./components/dashboard";
import NavBarSection from "./components/navbar";

function App() {
  return (
    <div className="flex max-w-full">
      <NavBarSection />
      <div className="flex-1  p-5">
        <DashboardSection />
      </div>
    </div>
  );
}

export default App;
