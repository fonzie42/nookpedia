import { assign, createMachine } from 'xstate'

export type AvailableIcons = 'Critterpedia'

export type AvailableApplications = 'Critter' | 'Sea Creature' | 'Fish'

export const toggleMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QDkD2qDWAFAFqgdmAHQAOehAkhADZgDEAwgDIUMDSA+qwPLKKglUsAJYAXYQX4gAHogBMARgBsRJXICsABjkalmgOwAOAMwAWADQgAnvNOaimu9uNmdS-cbkBfL5bSZcAmIAQxISbhIwfCJg-GEAW2DxfCgKfDppWFEkkIAzUTAAJwAKBS1NAEo6f2xyELCIqJi4xOTU-ClBEXFJJBlEBTl9fSJTIc1jfQBOTw9jSxsEQ3Uphyd9OSUlQ30lMp8-dFqgmIbI6MKwYIgrRiZuAGUAUQ4AQSwsTqExCQ6+2QQZT0o2mClMphmmk0Sim+gWiGWq0cUI2Wx2e3UBxANUChFO4XOzQSSWEKW4AFdRBksjkYvkiqVylUcXV8Y1orFiW0KaIvt1flIAVNTMYiDopnIDBpDKZDCZ4Qh1Io1lC5JMjJoFMKsSyTrByQAjCgAYwI7KIl2ut2YjxeDwAqgAhLgMXh8n69UAA9TgogmFyGRz6UxKtQKjymIg+qHguRyzRTAw6o644j6o2m-Dmy03OjcLBPZBvD7unp-L2IYWi8WSjbqGVy+bWBErFVStG7fa+bEp1npk1mwmc1qk9rU7IFOkFEplKHM3t6w0DrNDloklJpUsC-7yPZEIyDPbKJRmYzqcNjffQ-QJpRjKaJ-TJgJ9peZ83D9dQHnj2nBekzky1QLni-bvquXKjjyW6ev0CCKCoahaDo6h6EYZgKlqchtuK0LqGUOg+N2+CoBAcBSLqeJkEEVC0DB5ZwWMCqKKsciJtowongmxiaJi3aUfUBJNJ+bSbn0XQegxAIKAoBiqCGhhqMKaoyQqyyisiBjbCxkzGM+xx4qEQkXFcNz0YKAxjIYIISrxgyKZsanqBp6zaVqun6ambIQSOZKUuZO6AjCIybBMkoPjMOxOS5KJuTMHieayRnsgFFaApoJjyfWSljMYqnNggGptjKMIaMYMKJYuGaDk0OaLAI3xlhZCCmIMfouK4CiKXl+HhuVV7uAokxTHsWx8YcL5VcuH5rqJDESU1gUSn1Kg3oNw2jUo409pNoFvjVHKzVB-niY125pXWUZQtoewPrxcIFRs1nRpqewaGxKyVXt1UrlEqVwdsCpbeoUZOGqD71lM6jbQJ-3SYYmFam2PHDPoMmmPofE+EAA */
  createMachine(
    {
      preserveActionOrder: true,
      tsTypes: {} as import('./state.typegen').Typegen0,
      schema: {
        context: {
          selectedIcon: null,
          selectedApp: null,
        } as {
          selectedIcon: null | string
          selectedApp: null | string
        },
        events: {} as
          | { type: 'CLICK_ICON'; icon: AvailableIcons | null }
          | { type: 'OPEN_APP'; app: AvailableApplications | null }
          | { type: 'CLOSE_SUB_ICON' }
          | { type: 'CLOSE_APP' }
          | { type: 'FINISH_ANIMATION' },
      },
      id: 'NookPhone',
      initial: 'phoneIdle',
      states: {
        phoneIdle: {
          on: {
            CLICK_ICON: {
              target: '#NookPhone.subIconOpen.animatingIn',
              actions: ['selectIcon'],
            },
          },
        },
        appOpen: {
          initial: 'animatingIn',
          states: {
            animatingIn: {
              after: {
                '1500': {
                  target: 'ready',
                },
              },
            },
            ready: {
              on: {
                CLOSE_APP: {
                  target: 'animatingOut',
                  actions: ['clearSelectedApp'],
                },
              },
            },
            animatingOut: {
              after: {
                '1500': {
                  target: '#NookPhone.phoneIdle',
                },
              },
            },
          },
        },
        subIconOpen: {
          initial: 'animatingIn',
          states: {
            ready: {
              on: {
                CLOSE_SUB_ICON: {
                  target: 'animatingOut',
                },
                OPEN_APP: {
                  target: '#NookPhone.appOpen.animatingIn',
                  actions: ['clickOpenApp'],
                },
              },
            },
            animatingIn: {
              after: {
                '1500': {
                  target: 'ready',
                },
              },
            },
            animatingOut: {
              after: {
                '1500': {
                  target: '#NookPhone.phoneIdle',
                  actions: ['clearSelectedIcon'],
                },
              },
            },
          },
        },
      },
    },
    {
      actions: {
        selectIcon: assign({
          selectedIcon: (_, event) => {
            return event.icon // @todo: is there a way to typecheck this?
          },
        }),
        clickOpenApp: assign({
          selectedApp: (_, event) => {
            return event.app // @todo: is there a way to typecheck this?
          },
        }),
        clearSelectedIcon: assign({ selectedIcon: (_, _event) => null }),
        clearSelectedApp: assign({
          selectedApp: (_, _event) => null,
          selectedIcon: (_, _event) => null,
        }),
      },
    },
  )
