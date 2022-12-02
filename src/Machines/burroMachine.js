import { createMachine } from "xstate";

const burritoMachine = createMachine({
  id: "Arma tu burro",
  initial: "selectBurro",
  states: {
    selectBurro: {
      on: {
        HOGARENO: "selectProteins1",
        VALIENTE: "selectProteins1",
        EXTREMO: "selectProteins1",
        CANCEL: "selectBurro",
      },
    },
    selectProteins1: {
      on: {
        COMPLETECOUNTS: "defineDislikes",
        CANCEL: "selectBurro",
      },
    },
    defineDislikes: {
      on: {
        COMPLETECOUNTS: "selectAdditions",
        CANCEL: "selectBurro",
      },
    },
    selectAdditions: {
      on: {
        COMPLETECOUNTS: "withCombo",
        CANCEL: "selectBurro",
      },
    },
    withCombo: {
      on: {
        YES: "optionAddCart",
        NOT: "optionAddCart",
      },
    },
    optionAddCart: {
      on: {
        FINISH: "",
        CONTINUE: "selectBurro",
      },
    },
  },
});

export default burritoMachine;