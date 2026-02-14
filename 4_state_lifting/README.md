# 📅 Day 4 – State Lifting in React

## 📘 What I Learned
Today I learned the **State Lifting (Lifting State Up)** concept in React.

- What is State Lifting
- Why we use State Lifting
- Sharing data between components
- Parent → Child data flow
- Child → Parent communication using props

---

## 🧠 What is State Lifting?

**State Lifting** means moving state from a child component to their **common parent component** so that multiple components can share and use the same data.

👉 React follows **one-way data flow (Parent → Child)**  
So, when two child components need the same data, we lift the state to the parent.

---

## 🎯 Why Use State Lifting?

- To share data between sibling components
- To maintain single source of truth
- To control data from parent
- To avoid duplicate state

---