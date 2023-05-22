import { auth } from './firebase';
import { signInWithPopup, GoogleAuthProvider,signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './Admin';
import Header from './_includes/Header';
import $ from 'jquery';

const provider = new GoogleAuthProvider();

export default function App() {
  const [isLogin,setIsLogin] = useState(false);
  const [user,setUser] = useState({});
  const [banner] = useState([{name:"Banner 1",url:"images/Banner1.png"},{name:"Banner 2",url:"images/Banner2.png"}]);
  const [chat,setChat] = useState([]);
  const [category,setCategory] = useState([]);
  const [recommended,setRecommended] = useState([]);
  const [popular,setPopular] = useState([]);
  

  // Use Effect
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLogin(true);
        setUser({email:user.email,name:user.displayName,image:user.photoURL});
        fetch('https://painting-backend.amanshakya.tech/chat', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({'email':user.email}),
        })
        .then(response => response.json())
        .then(element => {
          setChat(element.data);
        })
        .catch(error => {
          console.error("Error:", error);
        });
      }
      fetch('https://painting-backend.amanshakya.tech')
        .then(response => response.json())
        .then(element => {
          setCategory(element.category);
          setRecommended(element.recommended);
          setPopular(element.popular);
          $(".loader").hide();
        })
        .catch(error => {
          console.error("Error:", error);
        });
    });
  }, []);

  // google login
  const googleLogin = ()=>{
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setIsLogin(true);
        const isFirstTimeLogin = user.metadata.creationTime === user.metadata.lastSignInTime;
        if(isFirstTimeLogin){
          let data = {
            'email':user.email,
            'name':user.displayName,
            'image':user.photoURL
          }
          // This is to store user Information to database
          fetch('https://painting-backend.amanshakya.tech/user', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
          .then(response => response.json())
          .then(data => {
            console.log("Success:", data);
          })
          .catch(error => {
            console.error("Error:", error);
          });
        }
        // This is to fetch chat data
        fetch('https://painting-backend.amanshakya.tech/chat', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({'email':user.email}),
          })
          .then(response => response.json())
          .then(data => {
            setChat(data.data);
          })
          .catch(error => {
            console.error("Error:", error);
          });
        setUser({email:user.email,name:user.displayName,image:user.photoURL})
      }).catch((error) => {
      });
  }

  // This is a function logout from web app
  const logout = ()=>{
    $(".loader").show();
    signOut(auth).then(() => {
      setIsLogin(false);
      console.log("logout");
      $(".loader").hide();
    }).catch((error) => {
    });
  }

  const chatAdd = (event)=>{
    event.preventDefault()
    if($("#chatInput").val() === ""){
      alert("Empty");
      return;
    }
    let data  = {
      'message': $("#chatInput").val(),
      'paintinguser':user.email,
      'type':'user'
    }
    fetch('https://painting-backend.amanshakya.tech/chat/add', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(element => {
      $("#chatInput").val("");
      setChat(element.data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
  }

  return (
    <>
      <Header googleLogin={googleLogin} isLogin={isLogin} user={user} logout={logout} chat={chat} chatAdd={chatAdd} />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home isLogin={isLogin} user={user} banner={banner} recommended={recommended} category={category} popular={popular} />} />
            <Route path='admin/' element={<Admin isLogin={isLogin} />}/>
            <Route path="*" element={<h1 className='text-center py-5'>404 Not Found</h1> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
