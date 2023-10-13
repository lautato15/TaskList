import { createSlice } from "@reduxjs/toolkit";

const listsSlice = createSlice({
  name: "lists",
  initialState: [],
  reducers: {
    addList(state, action) {
      state.push(action.payload);
    },
    delList(state, action) {
      return state.filter((list) => list.id !== action.payload);
    },
    addItem(state, action) {
      const selectList = state.find(
        (list) => list.id === action.payload.listId
      );
      selectList.list.push(action.payload.item);
    },
    delItem(state, action) {
      const selectList = state.find(
        (list) => list.id === action.payload.listId
      );
      selectList.list = selectList.list.filter(
        (item) => item.id !== action.payload.itemId
      );
    },
    checkItem(state, action) {
      const selectList = state.find(
        (list) => list.id === action.payload.listId
      );
      const selectItem = selectList.list.find(
        (item) => item.id === action.payload.itemId
      );
      selectItem.checklist = !selectItem.checklist;
    },
  },
});
const { actions, reducer } = listsSlice;
export const { addList, delList, addItem, delItem, checkItem } = actions;
// SOLO SE PUEDE HACER UN EXPORT DEFAUL POR ARCHIVO, PERO MUCHOS EXPORT "COMUNES" POR ESO EN ESTE CASO USAMOS EL DEFAULT QUE PUEDE SER UNO SOLO PARA EL REDUCER Y EL RESTO LO EXPORTAMOS CON LA OTRA FORMA
export default reducer;
