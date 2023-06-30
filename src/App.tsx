import React from 'react';
import {BrowserRouter, Link, Route, Router, Routes} from 'react-router-dom';
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {

    return (
        <BrowserRouter>
            <div>
                <Link to={'/users'}>Пользователи</Link>
                <Link to={'/todos'}>Список дел</Link>
            </div>
            <Routes>
                <Route path="/users" element={<UsersPage/>}/>
                <Route path="/todos" element={<TodosPage/>}/>
                <Route path="/users/:id" element={<UserItemPage/>}/>
                <Route path="/todos/:id" element={<TodoItemPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;