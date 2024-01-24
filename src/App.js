import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from './Layout';
import Home from './Home';
import Top_rated from './Top_rated';
import Latest from './Latest';
import Contact from './Contact';
import SearchMovie from './SearchMovie';
import { DataProvider } from './context/DataContext';
import PlayMovie from './PlayMovie';
import React from 'react';


const App = () => {

  
  const baseURL='https://api.themoviedb.org/3';

  const [allmovies, setAllMovies] = useState([]);



  return(
    <DataProvider>
    <Routes>
        
        <Route path="/" element= {
            <Layout />
        } >

            <Route index element={<Home
                baseURL={baseURL}
            /> } />




           
            <Route path="all" >

                <Route index element={<SearchMovie
                            baseURL={baseURL}
                            allmovies={allmovies}
                            setAllMovies={setAllMovies}
                /> } />
                
                <Route path=":id" element={<PlayMovie 
                
                />  } />

            </Route>




            <Route path="top_rated" element={
                  <Top_rated 
                      baseURL={baseURL}
                  /> } />
            <Route path="latest" element={
                <Latest 
                    baseURL={baseURL}
                /> } />
            <Route path="contact" element={<Contact /> } />

        </Route>

    </Routes>
    </DataProvider>
  )
    
}
export default App;

/*
 <Route path="all" element={<SearchMovie
                baseURL={baseURL}
                allmovies={allmovies}
                setAllMovies={setAllMovies}
            /> } />
            
    */