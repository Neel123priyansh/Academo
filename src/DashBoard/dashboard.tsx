import React, { useState } from "react";
import HeaderDB from "./HeaderDB";
import avat from "../assets/Avatar.png";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";

interface Todo {
  text: string;
  completed: boolean;
}

ChartJS.register(ArcElement, Tooltip, Legend);

// Pie Chart Data
export const data = {
  labels: ["AI", "Data Class", "Maths", "Games"],
  datasets: [
    {
      data: [32, 22, 18, 16],
      backgroundColor: ["#A76DFF", "#B488FD", "#C2A3FB", "#96E0DA"],
      hoverBackgroundColor: ["#8A5BDB", "#9F77F1", "#A98CF0", "#78C7C4"],
      borderWidth: 0,
    },
  ],
};

export const options = {
  plugins: {
    tooltip: {
      enabled: false,
    },
  },
  cutout: "70%",
  responsive: true,
};

export const Dashboard = () => {
  const [isCardExpanded, setIsCardExpanded] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]); // List of todos
  const [newTodo, setNewTodo] = useState<string>(""); // New todo input value
  const [dueDate, setDueDate] = useState<string>(""); // Deadline input value

  const addTodo = (): void => {
    if (newTodo.trim() !== "" && dueDate.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false, dueDate }]);
      setNewTodo(""); // Clear input after adding
      setDueDate(""); // Clear date input
    }
  };

  const toggleTodo = (index: number): void => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index: number): void => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const toggleCard = () => {
    setIsCardExpanded(!isCardExpanded);
  };

  return (
    <div className="bg-[#ffffff] h-screen w-screen">
      <HeaderDB />
      <div className="flex flex-row ml-[24%] gap-5 space-y-8">
        {/* Avatar and Expandable Card */}
        <div className="relative">
          {/* Avatar (Hidden when Card is Expanded) */}
          <img
            className={`size-52 mt-10 cursor-pointer object-cover transition-opacity duration-300 ${
              isCardExpanded ? "opacity-0" : "opacity-100"
            }`}
            src={avat}
            alt="Avatar"
            onClick={toggleCard}
          />

          {/* Expandable Card */}
          {isCardExpanded && (
            <div
              className="absolute top-0 left-0 w-[300px] h-auto bg-white border border-gray-300 shadow-lg rounded-lg p-4 z-10 animate-fade-in-scale"
            >
              <h1 className="font-bold text-xl mb-2 text-center">User Details</h1>
              <img
                className="w-[100px] h-[100px] rounded-full mx-auto mb-4 object-cover"
                src={avat}
                alt="Avatar Expanded"
              />
              <p className="text-gray-800 text-lg text-center">📛 Name: Priyansh Neel</p>
              <p className="text-gray-800 text-lg text-center">🆔 ID: RA2311056030183</p>
              <p className="text-gray-800 text-lg text-center">📚 Class: DS-C</p>
              <p className="text-gray-800 text-lg text-center">🏫 Dept: Computer Science</p>

              {/* Close Button */}
              <button
                className="mt-4 px-4 py-2 bg-[#30CFD0] text-white rounded-md hover:bg-[#2bafaf] w-full"
                onClick={toggleCard}
              >
                Close
              </button>
            </div>
          )}
        </div>
        <h1 className="font-semibold h-max font-Nunito mr-5 flex flex-col text-3xl">Hi, Priyansh Neel<br/><h1 className="text-[15px] text-gray-500 mt-2">Let's track your Academics daily!</h1></h1>
        {/* Pie Chart */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-[50%] shadow-[rgba(0,_0,_0,_0.3)_0px_30px_90px] space-x-9 rounded-lg">
          {/* Category Breakdown */}
          <div>
            <h1 className="text-xl font-bold  mb-4">Total Attendance</h1>
            <ul className="space-y-4">
              {data.labels.map((label, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span className="flex items-center text-sm font-medium">
                    <span
                      className="w-4 h-4 rounded-full mr-2"
                      style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
                    ></span>
                    {label}
                  </span>
                  <span className="text-sm font-semibold">
                    {data.datasets[0].data[index]}%
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative w-[200px] h-[200px]">
            <Doughnut data={data} options={options} />
            {/* Center Percentage */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* <p className="text-xl font-bold">97%</p> */}
            </div>
          </div>
          </div>
      </div>
      <div className="flex flex-row-reverse ml-[26%] w-max mt-10 ">
        <div className="bg-white shadow-[rgba(0,_0,_0,_0.3)_0px_30px_90px] flex-col ml-6 rounded-lg p-8 w-[584px]">
        <h1 className="text-2xl font-bold mb-4 text-center flex items-center justify-center">
          NOTIFICATION <span className="ml-2 text-green-500">🕊</span>
        </h1> 
        <div className="flex flex-row">
        <h1 className="font-semibold h-max font-Nunito mr-5 flex flex-col text-zinc-500 text-xl">21/1/25<br/></h1>
        <h1 className="font-semibold h-max font-Nunito mr-5 flex flex-col text-xl">Marked Absent for DBMS.</h1>
        </div>
        <div className="flex flex-row mt-8">
        <h1 className="font-semibold h-max font-Nunito mr-5 flex flex-col text-zinc-500 text-xl">12/1/25<br/></h1>
        <h1 className="font-semibold h-max font-Nunito mr-5 flex flex-col text-xl">Marked Absent for AI.</h1>
        </div>
        <div className="flex flex-row mt-8">
        <h1 className="font-semibold h-max font-Nunito mr-5 flex flex-col text-zinc-500 text-xl">02/1/25<br/></h1>
        <h1 className="font-semibold h-max font-Nunito mr-5 flex flex-col text-xl">Marked Absent for .</h1>
        </div>
        <div className="flex flex-row mt-8">
        <h1 className="font-semibold h-max font-Nunito mr-5 flex flex-col text-zinc-500 text-xl">01/1/25<br/></h1>
        <h1 className="font-semibold h-max font-Nunito mr-5 flex flex-col text-xl">Marked Absent for DBMS.</h1>
        </div>
        <div className="flex flex-row mt-8">
        <h1 className="font-semibold h-max font-Nunito mr-5 flex flex-col text-zinc-500 text-xl">01/1/25<br/></h1>
        <h1 className="font-semibold h-max font-Nunito mr-5 flex flex-col text-xl">Marked Absent for Computer Architecture.</h1>
        </div>
        </div>
      <div className="bg-white shadow-[rgba(0,_0,_0,_0.3)_0px_30px_90px] rounded-lg p-8 w-[450px]">
        <h1 className="text-2xl font-bold mb-4 text-center flex items-center justify-center">
          TODO LIST <span className="ml-2 text-green-500">✅</span>
        </h1>

        {/* Add New Todo */}
        <div className="mb-1">
          <input
            type="text"
            placeholder="Add a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-t focus:outline-none"
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-b focus:outline-none mt-2"
          />
          <button
            onClick={addTodo}
            className="w-full bg-[#273755f9] text-white py-2 rounded mt-2 hover:bg-blue-600"
          >
            Add Task
          </button>
        </div>

        {/* Todo List */}
        <div>
          {todos.map((todo, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-100 p-2 mb-2 rounded"
            >
              {/* Checkbox, Todo Text, and Due Date */}
              <div className="flex flex-col w-full">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(index)}
                    className="mr-2"
                  />
                  <span
                    className={`${
                      todo.completed ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {todo.text}
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  Due: {todo.dueDate || "No Deadline"}
                </span>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => deleteTodo(index)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};
