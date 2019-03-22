
export default {
    state: {
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
    },
    subscriptions: {
      setup({ dispatch, history }) {
      },
    },
    reducers: {
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
  