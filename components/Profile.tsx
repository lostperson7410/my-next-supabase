'use client'
import { selectUser, setUser } from '@/lib/features/userProfile/userProfileSlice';
import { supabase } from '@/utils/supabase/supabaseClient';
import { isEmpty } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {v4 as uuidv4} from 'uuid'

const Profile = (props:any) => {

    const {
        isNavbar,
        isCanUpload = true,
        initalValues,
        height,
        width,
        onUpload
    } = props

    const dispatch = useDispatch();
    const [selectedFile, setSelectedFile] = useState<string | null>(null);

    
    useEffect(() => {

        if (initalValues) {
            setUpUserRedux()
        }
        // if(initalValues?.user_metadata?. ){
        //     setSelectedFile(initalValues?.user_metadata?.avatar_url)
        // }
    }, [initalValues]);

    const setUpUserRedux = () => {
        dispatch(setUser(initalValues))
    }
    
    
    const handleFileChange = async (event:any) => {
        const file = event.target.files[0];
        const res:any = await uploadImageProfile(file)
        onUpload&&onUpload(res?.data?.publicUrl)
        setSelectedFile(res?.data?.publicUrl);        
    };


    const uploadImageProfile = async (file:File) => {
        try {
            const {data,error} = await supabase?.storage?.from("attachments").upload(uuidv4(),file)
            if (isEmpty(error)) {
                const url = await supabase?.storage?.from("attachments").getPublicUrl(data?.path)
                if (isEmpty(url?.error)) {
                    return {success:true , data: url?.data}
                }else{
                    return {success:false, error:'CANNOT_GET_IMAGE_URL'}
                }
            } else {
                return {success:false, error:error}
            }
            
        } catch (error) {
            console.log('Something went wrong', error);
        }
    }

    //create a new function to upload a file to supabase then set a reponse public url to state object

    //upload => get public url => set public url to state => state will return to form

    const themeDefaults = {
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: '10px'
    }
    const themeNav = {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: '10px'
    }


    return (
        <div style={isNavbar ? themeNav : themeDefaults}>
            <div style={{
                borderRadius: '50%', 
                width: `${ width || '100px'}`, 
                height: `${ height || '100px'}`, 
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
                    disabled={!isCanUpload}
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
            {
                initalValues?.user_metadata?.username && (
                    <div>
                        {
                        initalValues?.user_metadata?.username
                        }
                    </div>
                )
            }
            {
                isCanUpload && (
                    <div 
                        className='cursor-pointer border-2 border-green-700 text-white rounded-md px-4 py-2 text-foreground mb-2'
                        onClick={() => {
                            document.getElementById('fileInput')?.click()}}
                    >
                        Upload Profile
                    </div>
                )
            }
        </div>
    );
};

export default Profile;
