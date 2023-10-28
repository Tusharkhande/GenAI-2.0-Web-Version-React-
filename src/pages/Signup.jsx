import React, { useState } from 'react';

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [lname, setLName] = useState('');
    const [fname, setFName] = useState('');


    const handleFNameChange = (e) => {
        setFName(e.target.value);
        console.log("Name:", name);
    };
    const handleLNameChange = (e) => {
        setLName(e.target.value);
        console.log("Name:", name);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRegister = () => {
        // Perform registration logic using name, email, and password
        console.log("Register");
        console.log("Name:", fname,lname);
        console.log("Email:", email);
        console.log("Password:", password);
        // ... rest of your registration logic
    };

    return (
        <div>
            <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
                <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: "1000px" }}>
                    <div className="md:flex w-full">
                        <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                            <div className="text-center mb-10">
                                <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                            </div>
                            <div>
                                <div className="flex -mx-3 mb-5">
                                    <div className="w-1/2 px-3">
                                        <label htmlFor="" className="text-xs font-semibold px-1">First name</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input
                                                id="fname"
                                                type="text"
                                                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                                placeholder="John"
                                                value={fname}
                                                onChange={handleFNameChange} // Set the name state based on user input
                                            />                                        </div>
                                    </div>
                                    <div className="w-1/2 px-3">
                                        <label htmlFor="" className="text-xs font-semibold px-1">Last name</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input
                                                id="lname"
                                                type="text"
                                                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                                placeholder="Smith"
                                                value={lname}
                                                onChange={handleLNameChange} // Set the name state based on user input
                                            />   
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3 mb-5">
                                    <div className="w-full px-3">
                                        <label htmlFor="" className="text-xs font-semibold px-1">Email</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                            <input
                                                id="email"
                                                type="text"
                                                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                                placeholder="johnsmith@example.com"
                                                value={email}
                                                onChange={handleEmailChange} // Set the name state based on user input
                                            />   
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3 mb-12">
                                    <div className="w-full px-3">
                                        <label htmlFor="" className="text-xs font-semibold px-1">Password</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                            <input
                                                id="pass"
                                                type="text"
                                                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                                placeholder="************"
                                                value={password}
                                                onChange={handlePasswordChange} // Set the name state based on user input
                                            />   
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-full px-3 py-3 font-semibold" onClick={handleRegister}>REGISTER NOW</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className=" md:block w-1/2">
                            {/* Image Content */}
                            <img
                                src="https://th.bing.com/th/id/R.c316fb113192ff4854db1c528e142203?rik=lw7%2fxKt0DOosgw&riu=http%3a%2f%2fi65.photobucket.com%2falbums%2fh213%2fal13ns%2fIronman_zps08caec09.gif&ehk=NRXsExeozi41d3t7EdmjzswwKSyXlqSqHM75y1xnpwI%3d&risl=&pid=ImgRaw&r=0"
                                alt="Registration"
                                className="object-cover object-center w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
