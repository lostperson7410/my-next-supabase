'use client'
import React, { useEffect, useRef, useState } from 'react';

const Profile = (props) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event: { target: { files: any[]; }; }) => {
        const file = event.target.files[0];
        const result = URL?.createObjectURL(file)
        setSelectedFile(result);
    };

    //create a new function to upload a file to supabase then set a reponse public url to state object

    //upload => get public url => set public url to state => state will return to form

    return (
        <div style={{
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '20px'
        
        }}>
            <div style={{
                borderRadius: '50%', 
                width: '100px', 
                height: '100px', 
                backgroundColor: 'white', 
                position: 'relative', 
                zIndex:2, 
                color:'black',
                display: 'inline-block', 
            }}>
                {selectedFile && (
                    <img
                    src={selectedFile}
                    alt="Avatar Preview"
                    style={{
                        width: '100px', 
                        height: '100px', 
                        objectFit:'cover',
                        borderRadius: '50%',
                    }}
                />
                )
                }

                <input 
                    {...props}
                    id="fileInput"
                    type="file" 
                    accept=".png, .jpg" 
                    onChange={handleFileChange} 
                    style={{ 
                        opacity: 0, 
                        position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        width: '100px', 
                        height: '100px', 
                        zIndex: 1 ,
                        cursor:'pointer'
                    }}
                />
            </div>
            <button 
                className='border-2 border-green-700 text-white rounded-md px-4 py-2 text-foreground mb-2'
                onClick={() => document.getElementById('fileInput')?.click()}
            >
                Upload Profile
            </button>
        </div>
    );
};

export default Profile;
