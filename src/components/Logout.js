import { useNavigate } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
      };
    
    return (
        <button className="button-logout" onClick={handleLogout}>
                Logout
        </button> 
    );
    
}

