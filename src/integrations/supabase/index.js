import { createClient } from '@supabase/supabase-js';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

import React from "react";
export const queryClient = new QueryClient();
export function SupabaseProvider({ children }) {
    return React.createElement(QueryClientProvider, { client: queryClient }, children);
}

const fromSupabase = async (query) => {
    const { data, error } = await query;
    if (error) throw new Error(error.message);
    return data;
};

/* supabase integration types

UserData // table: user_data
    id: number
    created_at: string
    user_data: object

Task // table: tasks
    id: number
    created_at: string
    user_id: string
    task_name: string
    task_description: string

UserFile // table: user_files
    id: number
    created_at: string
    user_id: string
    file_name: string
    file_description: string

FormResult // table: form results
    id: number
    created_at: string
    response: object

Message // table: messages
    id: number
    created_at: string
    for: string
    message: string

*/

export const useUserData = () => useQuery({
    queryKey: ['user_data'],
    queryFn: () => fromSupabase(supabase.from('user_data').select('*')),
});

export const useAddUserData = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newUserData) => fromSupabase(supabase.from('user_data').insert([newUserData])),
        onSuccess: () => {
            queryClient.invalidateQueries('user_data');
        },
    });
};

export const useUpdateUserData = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedUserData) => fromSupabase(supabase.from('user_data').update(updatedUserData).eq('id', updatedUserData.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('user_data');
        },
    });
};

export const useDeleteUserData = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('user_data').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('user_data');
        },
    });
};

export const useTasks = () => useQuery({
    queryKey: ['tasks'],
    queryFn: () => fromSupabase(supabase.from('tasks').select('*')),
});

export const useAddTask = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newTask) => fromSupabase(supabase.from('tasks').insert([newTask])),
        onSuccess: () => {
            queryClient.invalidateQueries('tasks');
        },
    });
};

export const useUpdateTask = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedTask) => fromSupabase(supabase.from('tasks').update(updatedTask).eq('id', updatedTask.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('tasks');
        },
    });
};

export const useDeleteTask = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('tasks').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('tasks');
        },
    });
};

export const useUserFiles = () => useQuery({
    queryKey: ['user_files'],
    queryFn: () => fromSupabase(supabase.from('user_files').select('*')),
});

export const useAddUserFile = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newUserFile) => fromSupabase(supabase.from('user_files').insert([newUserFile])),
        onSuccess: () => {
            queryClient.invalidateQueries('user_files');
        },
    });
};

export const useUpdateUserFile = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedUserFile) => fromSupabase(supabase.from('user_files').update(updatedUserFile).eq('id', updatedUserFile.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('user_files');
        },
    });
};

export const useDeleteUserFile = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('user_files').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('user_files');
        },
    });
};

export const useFormResults = () => useQuery({
    queryKey: ['form_results'],
    queryFn: () => fromSupabase(supabase.from('form_results').select('*')),
});

export const useAddFormResult = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newFormResult) => fromSupabase(supabase.from('form_results').insert([newFormResult])),
        onSuccess: () => {
            queryClient.invalidateQueries('form_results');
        },
    });
};

export const useUpdateFormResult = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedFormResult) => fromSupabase(supabase.from('form_results').update(updatedFormResult).eq('id', updatedFormResult.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('form_results');
        },
    });
};

export const useDeleteFormResult = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('form_results').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('form_results');
        },
    });
};

export const useMessages = () => useQuery({
    queryKey: ['messages'],
    queryFn: () => fromSupabase(supabase.from('messages').select('*')),
});

export const useAddMessage = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newMessage) => fromSupabase(supabase.from('messages').insert([newMessage])),
        onSuccess: () => {
            queryClient.invalidateQueries('messages');
        },
    });
};

export const useUpdateMessage = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedMessage) => fromSupabase(supabase.from('messages').update(updatedMessage).eq('id', updatedMessage.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('messages');
        },
    });
};

export const useDeleteMessage = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('messages').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('messages');
        },
    });
};