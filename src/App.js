import React from 'react';
import Footer from './components/footer';
import './App.css';
import Container from './components/container';
import Navigation from './components/navigation';
function  App() {
	let containertext1="Bharathi Guggilapu";
	let text1 = "hello friends"
	let containertext="container_content"
	let navigationtext="full stack devolepment"
    return (
      <div>
        <Navigation nt={navigationtext}/>
        <Container ct={containertext} ct1={containertext1} />
       <Footer footertext={text1}/>
			 </div>
    );
  }
export default App;