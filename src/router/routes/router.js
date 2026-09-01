import { createBrowserRouter } from "react-router-dom";
import MainContainer from "../pages/main/MainContainer";
import HobbyContainer from "../pages/hobby/HobbyContainer";
import CommunityContainer from "../pages/community/CommunityContainer";
import Post from "../pages/community/post/Post";
import Comment from "../pages/community/comment/Comment";
import User from "../pages/community/user/User";
import Todo from "../pages/community/todo/Todo";
import PostRead from "../pages/community/post/PostRead";
import NotFound from "../pages/notfound/NotFound";

const router = createBrowserRouter([
    {path:"",element:<MainContainer/>},
    {path:"/hobby",element:<HobbyContainer/>},
    {
        path:"/community",
        element:<CommunityContainer/>,
        children:[
            // 따로(각각의 레이아웃) 사용할때는 동적 파라미터를 사용하면 안된다.
            {path:"comment",element:<Comment/>},
            {path:"post",element:<Post/>},
            {path:"user",element:<User/>},
            {path:"todo",element:<Todo/>},
        ]
    },
    {
        // :id 는 변수에 담겠다 라는 뜻
        path:"/community/post/read/:id", element:<PostRead/>
    },
    {
        path:"*", element:<NotFound/>
    }
])

export default router;