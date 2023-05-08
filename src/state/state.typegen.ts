// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true
  internalEvents: {
    'xstate.after(1500)#NookPhone.appOpen.animatingIn': {
      type: 'xstate.after(1500)#NookPhone.appOpen.animatingIn'
    }
    'xstate.after(1500)#NookPhone.appOpen.animatingOut': {
      type: 'xstate.after(1500)#NookPhone.appOpen.animatingOut'
    }
    'xstate.after(1500)#NookPhone.subIconOpen.animatingIn': {
      type: 'xstate.after(1500)#NookPhone.subIconOpen.animatingIn'
    }
    'xstate.after(1500)#NookPhone.subIconOpen.animatingOut': {
      type: 'xstate.after(1500)#NookPhone.subIconOpen.animatingOut'
    }
    'xstate.init': { type: 'xstate.init' }
  }
  invokeSrcNameMap: {}
  missingImplementations: {
    actions: never
    delays: never
    guards: never
    services: never
  }
  eventsCausingActions: {
    clearSelectedApp: 'CLOSE_APP'
    clearSelectedIcon: 'xstate.after(1500)#NookPhone.subIconOpen.animatingOut'
    clickOpenApp: 'OPEN_APP'
    selectIcon: 'CLICK_ICON'
  }
  eventsCausingDelays: {}
  eventsCausingGuards: {}
  eventsCausingServices: {}
  matchesStates:
    | 'appOpen'
    | 'appOpen.animatingIn'
    | 'appOpen.animatingOut'
    | 'appOpen.ready'
    | 'phoneIdle'
    | 'subIconOpen'
    | 'subIconOpen.animatingIn'
    | 'subIconOpen.animatingOut'
    | 'subIconOpen.ready'
    | {
        appOpen?: 'animatingIn' | 'animatingOut' | 'ready'
        subIconOpen?: 'animatingIn' | 'animatingOut' | 'ready'
      }
  tags: never
}
