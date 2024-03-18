import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "My Favorites"

export default function FavoritesProvider({ children }) {
    const [favorite, setFavorite] = useState([])

    return(
        <FavoritesContext.Provider
            value={{ favorite, setFavorite }}
        >
            { children }
        </FavoritesContext.Provider>
    );
}

//Hook Personalizado
export function useFavoriteContext() {
    const { favorite, setFavorite } = useContext(FavoritesContext);

    function addFavorite(newFavorite) {
        //verificar se o item foi repetido
        const repeatedFavorite = favorite.some((item) => item.id === newFavorite.id)
        //nova lista recebe a lista anterior
        let newList = [...favorite]
        //verificar se não tem repetido e adicionar o item
        if(!repeatedFavorite){
            newList.push(newFavorite)
            return setFavorite(newList)
        }
        //se repetido é tirado da lista
        newList = favorite.filter((fav) => fav.id !== newFavorite.id )

        return setFavorite(newList)
    }

    return {
        favorite,
        addFavorite
    }
}