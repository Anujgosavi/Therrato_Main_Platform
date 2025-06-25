const supabase = require("../supabaseClient");

// SIGN UP
exports.signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      return res.status(400).json({ status: "fail", message: error.message });
    }
    return res.status(201).json({ status: "success", data });
  } catch (err) {
    return res.status(500).json({ status: "error", message: err.message });
  }
};

// SIGN IN
exports.signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      return res.status(400).json({ status: "fail", message: error.message });
    }
    // You get a JWT in data.session.access_token
    return res
      .status(200)
      .json({
        status: "success",
        token: data.session.access_token,
        user: data.user,
      });
  } catch (err) {
    return res.status(500).json({ status: "error", message: err.message });
  }
};
