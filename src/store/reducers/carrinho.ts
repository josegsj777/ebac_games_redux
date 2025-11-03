import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {Game} from '../../App'

type CarrinhosState = {
  itens: Game[]
}

const initialState: CarrinhosState = {
  itens: []
}

const carrinhosSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload

      if(state.itens.find((game) => game.id === jogo.id)) {
        alert('Item ja adicionado')
      } else {
        state.itens.push(jogo)
      }
    }
  }
})

export const {adicionar} = carrinhosSlice.actions
export default carrinhosSlice.reducer
