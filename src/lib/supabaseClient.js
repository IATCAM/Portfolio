
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://umpxyqynyvkgcsphpthq.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtcHh5cXlueXZrZ2NzcGhwdGhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwNjM4ODcsImV4cCI6MjA2NzYzOTg4N30.jY7aanQfBboqjKSeD5RL5oUzc8jA61LWczRFjxGkhpg"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
