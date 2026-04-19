import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { authService } from "../config/authService";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const responseGoogle = async (authResult) => {
        setLoading(true);
        try {
            const result = await axios.post(`${authService}/api/auth/login`, {
                code: authResult.code,
            });
            localStorage.setItem("token", result.data.token);
            toast.success("Login successful");
            console.log(result);
            setLoading(false);
            navigate("/");
        } catch (error) {
            console.log(error);
            toast.error("Login failed");
            setLoading(false);
        }
    };

    const googleLogin = useGoogleLogin({
        onSuccess: responseGoogle,
        onError: responseGoogle,
        flow: "auth-code",
    });

    return (
        <div className="flex min-h-screen items-center justify-center bg-white px-4">
            <div className="w-full max-w-sm space-y-6">
                <h1 className="bg-white text-center text-2xl font-bold text-[#E23774]">
                    Tomato
                </h1>

                <p className="text-center text-sm text-gray-500">
                    Login or sign up to continue
                </p>

                <button
                    onClick={googleLogin}
                    disabled={loading}
                    className="w-full items-center flex justify-center gap-3 rounded-xl border border-gray-300 px-4 py-3 bg-white"
                >
                    <FcGoogle size={20} />
                    {loading ? "Loading ..." : "Login with Google"}
                </button>

                <p className="text-center text-sm text-gray-500">
                    By continuing, you agree to our{" "}
                    <span className="text-[#E23774]">Terms of Service</span> and{" "}
                    <span className="text-[#E23774]">Privacy Policy</span>
                </p>
            </div>
        </div>
    );
};

export default Login;
