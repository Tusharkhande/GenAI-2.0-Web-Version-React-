import React from 'react';

const Model = ({ model, isSelected, onClick }) => {
    const { name, image, primary, secondary } = model;
    const borderColor = isSelected ? 'border-4 border-indigo-500' : 'border';

    return (
        <div
            className={`p-4 border rounded-lg text-center cursor-pointer ${borderColor}`}
            onClick={() => onClick(model)}
        >
            <img src={image} alt={name} className="mx-auto mb-2 rounded-full" style={{ width: '100px', height: '100px' }} />
            <h3 className="text-lg font-semibold mb-2">{name}</h3>
            <div className="text-sm">
                <p>Primary Color: {primary}</p>
                <p>Secondary Color: {secondary}</p>
            </div>
        </div>
    );
};

export default Model;
