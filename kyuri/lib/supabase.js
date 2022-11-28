// Supabase Database
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto'

const supabaseUrl = 'https://pxgpbefzorpaijdaoadv.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4Z3BiZWZ6b3JwYWlqZGFvYWR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk2NTk4NDEsImV4cCI6MTk4NTIzNTg0MX0.Mevjn_zsVvV2hCqxMnXMXS61_ChtOkdA4BCsb54Dohw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  }
});