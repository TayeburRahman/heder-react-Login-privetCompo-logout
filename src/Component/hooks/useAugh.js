import { useContext } from "react"
import { AughContext } from "../../Context/AughProvider";

// Login for user data pas this component
const useAuth =()=>{
    return useContext(AughContext);
}

export default useAuth;