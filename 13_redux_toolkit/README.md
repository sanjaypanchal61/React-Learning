# 📅 Day 13 — Redux-Toolkit

# What I Learned Today

* Store
* Slice
* Reducer
* Action
* useSelector
* useDispatch

---

# 1. Store

### What is Store?

Store is the **central place** where all application data (state) is stored.

---

# 2. Slice

### What is Slice?

Slice is a **collection of state + reducers + actions** in one place.

### 🧠 Why use Slice?

* Combines logic in a single file

---

# 3. Reducer

### What is Reducer?

Reducer is a **function that updates the state** based on an action.

### 🧠 Key Point:

* Takes `state` and `action`
* Returns updated state

---

# 4. useSelector

### What is useSelector?

Hook used to **read data from the Redux store**.

### 🧠 Key Point:

* Re-renders when data changes

---

# 5. useDispatch

### What is useDispatch?

Hook used to **send actions to the Redux store**.

### 🧠 Key Point:

* Used to update state

---

# Data Flow

```
Component → dispatch(action) → reducer → store update → UI update
```