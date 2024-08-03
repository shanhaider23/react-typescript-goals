
import Header from "./components/Header"
import goalImage from "./assets/goals.jpg"
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/newGoal";

export type CourseGoal = {
  title: string
  description: string
  id:number
}
export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([])
  function handleAddgoal(goal: string, summary: string) {
    setGoals(prevGoals => {
      const newGoal: CourseGoal ={
        id:Math.random(),
        title:goal,
        description: summary
            }
      return [...prevGoals, newGoal]
    })

  }
  function handleDeleteGoal(id:number  ){
setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id))
  }
  return <main>
    <Header image={{src:goalImage, alt: 'List of Goal'}}>
      <h1>List of Goal</h1>
    </Header>
    <NewGoal onAddGoal={handleAddgoal}/>
    <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
   
    </main>;
}
