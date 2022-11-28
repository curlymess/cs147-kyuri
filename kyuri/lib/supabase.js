import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yuzyweiecmvkejklrrgu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1enl3ZWllY212a2Vqa2xycmd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk2NzI0MTQsImV4cCI6MTk4NTI0ODQxNH0.auFwp4aLABGtsWaO6vnCcjw3nB7kXdQA_1RvLzUvAXU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})

