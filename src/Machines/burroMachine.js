import { assign, createMachine } from "xstate";

const burritoMachine = createMachine({
  id: "Arma tu burro",
  initial: "selectBurro",
  context: {
    step: 1,
    option: '',
    proteins: [],
    addition: [],
    withoutIngredients: [],
    drinks:''
  },
  states: {
    selectBurro: {
      on: {
        HOGARENO:{
          target:"selectProteins1",
          actions: assign({
            step: (context, event) => event.step,
            option: (context, event) => event.opt,
          })
        },
        VALIENTE: "selectProteins1",
        EXTREMO: "selectProteins1",
        CANCEL: "selectBurro",
      },
    },
    selectProteins1: {
      on: {
        COMPLETECOUNTS: {
          target:"defineDislikes",
          actions: assign({
            step: (context, event) => event.step,
          })
        },
        CANCEL: "selectBurro",
      },
    },
    defineDislikes: {
      on: {
        COMPLETECOUNTS: {
          target:"selectAdditions",
          actions: assign({
            step: (context, event) => event.step,
          })
        },
        CANCEL: "selectBurro",
      },
    },
    selectAdditions: {
      on: {
        COMPLETECOUNTS:{
          target:"withCombo",
          actions: assign({
            step: (context, event) => event.step,
          })
        },
        CANCEL: "selectBurro",
      },
    },
    withCombo: {
      on: {
        YES: {
          target:"optionAddCart",
          actions: assign({
            step: (context, event) => event.step,
          })
        },
        NOT: "optionAddCart",
      },
    },
    optionAddCart: {
      on: {
        FINISH: "",
        CONTINUE: "selectBurro",
      },
    },
  }
},
{
  actions: {
    sumaEstado: () => console.log('hh'),
  }
}
);

export default burritoMachine;