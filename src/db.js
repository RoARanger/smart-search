const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ztacwfvgocchvckhzhjd.supabase.co';  // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0YWN3ZnZnb2NjaHZja2h6aGpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTczMjAwMjUsImV4cCI6MjAzMjg5NjAyNX0.SS4LKdi8q5o7MFMH79GKUhdrrGNwbgQng0SFlG30xfs';  // Replace with your Supabase public API key

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
