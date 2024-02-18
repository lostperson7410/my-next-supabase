'use client'

import { createClient } from '@/utils/supabase/server';
import { supabase } from '@/utils/supabase/supabaseClient';
import { useEffect, useState } from 'react';

export default function Notes() {


  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNoteData()
  }, []);
  const getNoteData = async ()=>{
    const respones:any = await supabase.from("notes").select('*')
    setNotes(respones?.data);
  }
  // const { data: notes } = await supabase.from("notes").select();

  // console.log('this is note: ',notes);


  async function addTodo(payload:any) {
    const res = await supabase.from('notes').insert(payload).select()
    if (res?.error) {
      console.error('Error adding todo:', res.error?.message);
      return;
    }
    await getNoteData();
  }
  async function updateTodo(payload:any) {
    const res = await supabase.from('notes').update({title: payload?.title}).eq('id', payload?.id);
    if (res?.error) {
      console.error('Error adding todo:', res.error?.message);
      return;
    }
    await getNoteData();
  }

  async function deleteTodo(id:number) {
    // note * "eq" One to One 
    // useing "in" patch to Many
    // Example Code
    // const { error,...props } = await supabase.from('notes').delete().in('id',[7,8,9])
    const { error,...props } = await supabase.from('notes').delete().eq('id',id)
    if (error) {
      console.error('Error deleting todo:', error.message);
      return;
    }
    await getNoteData();
  }

  const handelCreate = async (e)=>{
    const title = e.get('title') as any
    const payload = {
      ...(title && {title: title})
    }
    await addTodo(payload)    
  }
  return (
   <div>
    <h1>this is Note page</h1>
     {
      notes?.map(item => (
     <div key={item?.id} className='p-2 flex justify-between bg-slate-100  rounded-md items-center'>
      <p className='text-black'>{item?.title}</p>
      <div>

      <button className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2"
        onClick={()=> updateTodo({id:item?.id,title:'Update'})}
      >
        Edit
      </button>
      <button className="bg-red-700 rounded-md px-4 py-2 text-foreground mb-2"
        onClick={()=> deleteTodo(item?.id)
      }
      >
          Delete
        </button>
      </div>
     </div>
      ))
     }

     <div>
      {/* this is will render CLC Form */}
      <form
        className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        action={handelCreate}
      >
        <label className="text-md" htmlFor="email">
          Title
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="title"
          placeholder="title"
          required
        />
        
        <button className=" bg-sky-300 rounded-md px-4 py-2 text-foreground mb-2">
          Submit
        </button>
      </form>
     </div>
   </div>
  )
}