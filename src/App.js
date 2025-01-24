import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MessagePage from './pages/MessagesPage'
import LoginPage from "./pages/LoginPage"
import ProfilePage from "./pages/ProfilePage"
import UserListPage from "./pages/User-listPage"
import RegisterPage from "./pages/RegisterPage"
import CreatePostPage from "./pages/CreatePostPage"
import AllPostsPage from "./pages/AllPostsPage"
import SinglePostPage from "./pages/SinglePostPage"
import React from "react"



function  App() {
    return (
        <div>
            <BrowserRouter>
                <div className="container gap-5">
                    <h1 className="text-center">www.akai.com</h1>
                    <Routes>
                        <Route path="/users" component={UserListPage} />
                        <Route path="/messages/:userId" element={<MessagePage />} />
                        <Route path="/single-post/:id" element={<SinglePostPage/>}/>
                        <Route path="/all-post-page" element={<AllPostsPage/>}/>
                        <Route path="/create-post" element={<CreatePostPage/>}/>
                        <Route path="/profile" element={<ProfilePage/>}/>
                        <Route path="/list" element={<UserListPage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/" element={<RegisterPage/>}/>
                        <Route path="/" component={UserListPage} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;
