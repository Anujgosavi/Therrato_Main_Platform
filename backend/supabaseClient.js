const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.SUPABASEDURL;
const supabaseKey = process.env.SUPABASEDKEY;

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
