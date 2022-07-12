import { createMachine } from 'xstate'

export const toggleMachine = createMachine({
  tsTypes: {} as import('./state.typegen').Typegen0,
  schema: {
    context: {} as { value: string },
    events: {} as
      | { type: 'CLICK_ICON' }
      | { type: 'OPEN_APP' }
      | { type: 'CLOSE_SUB_ICON' }
      | { type: 'CLOSE_APP' },
  },
  id: 'NookPhone',
  initial: 'phoneIdle',
  states: {
    phoneIdle: {
      on: {
        CLICK_ICON: {
          target: 'subIconOpen',
        },
      },
    },
    subIconOpen: {
      on: {
        OPEN_APP: {
          target: 'appOpen',
        },
        CLOSE_SUB_ICON: {
          target: 'phoneIdle',
        },
      },
    },
    appOpen: {
      on: {
        CLOSE_APP: {
          target: 'phoneIdle',
        },
      },
    },
  },
})
