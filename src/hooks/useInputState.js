import { useState } from "react"

const useInputState = (defaultValue = '') =>{
    const [input,setInput] = useState(defaultValue);
    const handleChange = e => {
        setInput(e.target.value)
    }

    return [input,handleChange]
}


export default useInputState;