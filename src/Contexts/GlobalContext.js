import React, { createContext, useReducer } from "react";

// Constants
const initialState = [
	{
		id: 1,
		nome: "Mateus Leite Pedrosa",
		email: "mateus.pedrosa@cni.com.br",
		area: "Departamento de Tecnologia da Informação",
		cargo: "Analista - Desenvolvedor Frontend",
	},
];
const actions = {
	LOAD_INITIAL_STATE: "LOAD_INITIAL_STATE",
	CREATE_FUNCIONARIO: "CREATE_FUNCIONARIO",
	UPDATE_FUNCIONARIO: "UPDATE_HIGHLIGHT",
	DELETE_FUNCIONARIO: "DELETE_HIGHLIGHT",
};

// method - reducer actions
const reducer = (state, action) => {
	switch (action.type) {
		case actions.CREATE_FUNCIONARIO: {
			state.push(action.payload);
			return [...state];
		}
		case actions.UPDATE_FUNCIONARIO: {
			const id = action.payload.id;
			const updateIndex = state.findIndex((item) => item.id === id);
			state[updateIndex] = action.payload;
			return [...state];
		}
		case actions.DELETE_FUNCIONARIO: {
			const id = action.payload.id;
			const filter = state.filter((item) => item.id !== id);
			return [...filter];
		}
		default: {
			return [...state];
		}
	}
};

// context - initialize
const GlobalContext = createContext(null);

// context - provider
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const value = {
		readFuncionario: state,
		createFuncionario: (payload) => {
			dispatch({
				type: actions.CREATE_FUNCIONARIO,
				payload: payload,
			});
		},
		updadeFuncionario: (payload) => {
			dispatch({
				type: actions.UPDATE_FUNCIONARIO,
				payload: payload,
			});
		},
		deleteFuncionario: (payload) => {
			dispatch({
				type: actions.DELETE_FUNCIONARIO,
				payload: payload,
			});
		},
	};

	return (
		<GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
	);
};

export default GlobalContext;
