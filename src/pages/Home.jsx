import React, { useState, useEffect, Button } from 'react';
import Models from '../constants/Models';
import Navbar from '../components/Navbar';

const Home = () => {
  const [model, setModel] = useState([]);
  const [selectedModel, setSelectedModel] = useState([]);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    setModel(Models);
    setSelectedModel(Models[1]);
  }, []);

  const handleModal = () => {
    setExit(false);
    window.close();
  };

  return (
    <div>
      <Navbar />
    </div>
  )
}

export default Home;