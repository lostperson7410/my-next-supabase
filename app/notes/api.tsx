import { supabase } from "@/utils/supabase/supabaseClient";

type Note = {
  id: string;
  title: string;
};

export async function AllNotes() {
    const res = await supabase.from("notes").select();
    return res?.data;
}
