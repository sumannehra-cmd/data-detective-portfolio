import { createContext, useState } from "react";

export const PlayerContext = createContext();

export function PlayerProvider({children}){

const [currentModel,setCurrentModel] = useState(null);

return(

<PlayerContext.Provider value={{currentModel,setCurrentModel}}>

{children}

</PlayerContext.Provider>

);

}