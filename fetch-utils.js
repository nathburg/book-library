const SUPABASE_URL = 'https://jfjbgzuahxgxuzhpbvjy.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmamJnenVhaHhneHV6aHBidmp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk3MjEyNDQsImV4cCI6MTk3NTI5NzI0NH0.ALTank2v_SVyJvJfAF_p6loMLpa5JT8KDW0EllJpk5Q';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getBooks() {
    const response = await client.from('books').select('*');
    return response.data;
}

export async function getBook(id) {
    const response = await client.from('books').select('*').match({ id }).single();
    return response.data;
}