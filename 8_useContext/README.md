# 📅 Day 8 — useContext Hook

## 📌 What I Learned Today

Today I learned the **useContext Hook** in React.
`useContext` is used to share **global data** between components without passing props manually at every level (props drilling).

---

## 🤔 Why useContext?

Normally, data is passed using **props** from parent → child → deep child.
This is called **props drilling** and becomes messy in large apps.

`useContext` solves this problem by providing **direct access to shared data**.

---

## 🔹 Steps to Use useContext

1. **Create Context** using `createContext()`
2. **Wrap components** with `Context.Provider`
3. **Pass global data** using `value` prop
4. **Access data** in any component using `useContext()`