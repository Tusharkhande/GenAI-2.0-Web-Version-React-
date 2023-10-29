import React, { useState, useEffect } from 'react';
import Models from '../constants/Models';
import Navbar from '../components/Navbar';
import Model from '../components/Model';
import { Link } from 'react-router-dom';

const Home = () => {
    const [models, setModels] = useState([]);
    const [selectedModel, setSelectedModel] = useState(null);

    useEffect(() => {
        setModels(Models);
        setSelectedModel(Models[1]);
    }, []);

    const handleModelClick = (model) => {
        setSelectedModel(model);
    };

    const handleInitialize = () => {

    }

    return (
        <div className="flex">
            <Navbar />
            <div className='flex flex-col w-full justify-center'>
                <div className='flex flex-col self-center w-full'>
                    <h2 className="flex text-2xl font-bold justify-center">Select your prefered Model</h2>
                    <div className="flex self-center">
                        {models.map((model) => (
                            <div key={model.id} className="m-4 cursor-pointer" onClick={() => handleModelClick(model)}>
                                <Model model={model} isSelected={selectedModel && selectedModel.id === model.id} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center mb-2">
                        <Link to={'/'} className='block w-full mt-10 max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-full px-3 py-3 font-semibold'>SignIn</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
