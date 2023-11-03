import Login from '../src/pages/Login'
import TodoList from './pages/TodoList'
import AddTodo from './pages/AddTodo'
import { Route, Routes } from 'react-router-dom'


function App() {


  return (
    <>
        <Routes >
            <Route path='/todo/add' element={<AddTodo />}/>
            <Route path='/todo/' element={<TodoList />}/> 
            <Route path='/' element={<Login />}/> 
        </Routes>
    </>
  )
}

export default App
