"use client";
import React, { useState } from "react";
function bubbleSort(numbers: number[]){
  console.log("Sorting numbers:", numbers);
  let sorted = false;
  let temp = 0;
  let checks = 0;
  while (!sorted){
    sorted = true;
    for (let i = 0; i < numbers.length - 1; i++) {
      console.log(numbers[i] + " " + numbers[i + 1]);
      if (numbers[i] > numbers[i + 1]) {
        temp = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = temp;
        console.log("Swap made", numbers);
        sorted = false;
      }
        
      }
    }
  return numbers;
  }

function mergeSort(numbers: number[]): number[] {
  console.log("i havent implemented merge sort yet");
  return numbers;
}

export default function Home() {
  const [input, setInput] = React.useState("");
  const [algo, setAlgo] = React.useState("bubble");
  const sortingAlgos: Record<string, (arr: number[]) => number[]> = {
      bubble: bubbleSort,
      merge: mergeSort,
};

function runAlgo(name: string, arr: number[]) {
  const algoFunc = sortingAlgos[name];
  if (algoFunc) {
    return algoFunc(arr);
  } else {
    console.error("Algorithm not found:", name);
    return arr;
  }

}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-pink-100">
      <div className="bg-white/80 shadow-xl rounded-2xl p-10 flex flex-col items-center w-full max-w-md border border-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 tracking-tight">Bubble Sort Visualizer</h1>
        <input
          type="text"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-800 placeholder-gray-400 transition"
          placeholder="Enter numbers to sort, e.g. 5, 2, 9, 1"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <select
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 text-gray-800 bg-white placeholder-gray-400 transition cursor-pointer"
          value={algo} onChange={(e) => setAlgo(e.target.value)}
        >
          <option value="bubble">Bubble Sort</option>
          <option value="merge">Merge Sort</option>
        </select>
        <button
          className="w-full py-2 px-4 bg-gradient-to-r from-blue-400 to-pink-400 text-white font-semibold rounded-lg shadow-md hover:from-blue-500 hover:to-pink-500 transition mb-2"
          onClick={() => {
            
            const arr = input.split(",").map(x => Number(x.trim()));
            console.log("Input array:", arr);
            const sortedArr = runAlgo(algo, arr);
            console.log("Sorted array:", sortedArr);
          }}
        >
          Sort
        </button>
        <p className="text-xs text-gray-500 mt-2">Separate numbers with commas</p>
      </div>
    </div>
  );
}
