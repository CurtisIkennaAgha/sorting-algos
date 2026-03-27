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


export default function Home() {
  const [input, setInput] = React.useState("");

  return (
    <div style={{ backgroundColor: "white", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <input
        type="text"
        className="text-black"
        placeholder="Enter numbers to sort"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button
        className="text-black"
        onClick={() => {
          const arr = input.split(",").map(x => Number(x.trim()));
          console.log("Input array:", arr);
          const sortedArr = bubbleSort(arr);
          console.log("Sorted array:", sortedArr);
        }}
      >
        Sort
      </button>
    </div>
  );
}
