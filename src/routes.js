import { Route,BrowserRouter, Routes } from "react-router-dom";
import React from 'react'
import Login from "./component/Auth/Login/login";
import SignUp from "./component/Auth/Signup/signup"
import DashBoard from "./component/Dashboard/DashBoard";
import 'bootstrap/dist/css/bootstrap.min.css';

import Analysis from "./component/Analysis/Analysis";
import Article from "./component/Article/Articles";
import User from "./component/User/User";
import GetAllTips from "./component/Tip/GetAllTips";
import CreateTip from "./component/Tip/CreateTip"
import Tip from "./component/Tip/Tips";
import GetATip from "./component/Tip/GetATip";
import EditTip from "./component/Tip/EditTip";
import GetAllArticles from "./component/Article/GetAllArticles";
import CreateArticle from "./component/Article/CreateArticle";
import EditArticle from "./component/Article/EditArticle";
import GetAllAnalysis from "./component/Analysis/GetAllAnalysis"
import CreateAnalysis from "./component/Analysis/CreateAnalysis";
import EditAnalysis from "./component/Analysis/EditAnalysis";



const CustomRoutes = () => {
  return (
    <div className="container">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<DashBoard />} />

      <Route path="/analysis" element={<Analysis/>} />
      <Route path="/articles" element={<Article />} />
      <Route path="/tips" element={<Tip />} />
      <Route path="/users" element={<User />} />


      <Route path="/getalltips" element={<GetAllTips/>}/>
      <Route path="/createtip" element={<CreateTip/>}/>
      <Route path="/getatip" element={<GetATip/>}/>
      <Route path="/editatip/:id" element={<EditTip/>}/>


      {/* Articles */}
      <Route path="/getallarticles" element={<GetAllArticles/>}/>
      <Route path="/createarticle" element={<CreateArticle/>}/>
      <Route path="/getanarticle" element={<GetATip/>}/>
      <Route path="/editanarticle/:id" element={<EditArticle/>}/>

        {/* Analysis */}
        <Route path="/getallanalysis" element={<GetAllAnalysis/>}/>
      <Route path="/createanalysis" element={<CreateAnalysis/>}/>
      <Route path="/getan" element={<GetATip/>}/>
      <Route path="/editanalysis/:id" element={<EditAnalysis/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default CustomRoutes
