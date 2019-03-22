
export default {
    state: {
        theme: 'light',
        current: '1',
        collapsed: false,
        value:0
    },
    subscriptions: {
      setup({ dispatch, history }) {
      },
    },
    reducers: {
      addValue(state,payload){
        return {
          ...state,
          theme: payload.theme
        }
       },
        changeTheme(state,payload){
        return {
          ...state,
          theme: payload.theme
        }
      },
      handleClick(state,payload){
        return {
          ...state,
          current: payload.current
        }
      },
      toggle(state,payload){
        return {
            ...state,
            collapsed:payload.collapsed
        }
      },
      update(state) {
        return `${state}_home`;
      },
    },
    effects: {
      *fetch({ type, payload }, { put, call, select }) {
      },
    },
  }
  