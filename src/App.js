import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import UsersPage from "./pages/UsersPage"
import AlbumsPage from "./pages/AlbumsPage"
import PostsPage from "./pages/PostsPage"
import TodosPage from "./pages/TodosPage"
import SinglePostPage from "./pages/SinglePostPage"
import SingleUserPage from "./pages/SingleUserPage"
import PhotosPage from "./pages/PhotosPage"
import React from "react"



function  App() {
    return (
        <div>
            <BrowserRouter>
                <div className="container gap-5">
                    <h1 className="text-center">don't-worry.com</h1>

                    <Routes>
                        <Route path="/todos/:id" element={<TodosPage/>}/>
                        <Route path="/photos/:id" element={<PhotosPage/>}/>
                        <Route path="/albums/:id" element={<AlbumsPage/>}/>
                        <Route path="/posts/:id" element={<PostsPage/>}/>
                        <Route path="/" element={<UsersPage/>}/>
                        <Route path="/user/:id" element={<SingleUserPage/>}/>
                        <Route path="/singlePost/:id" element={<SinglePostPage/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
