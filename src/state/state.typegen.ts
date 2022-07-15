// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true
  eventsCausingActions: {}
  internalEvents: {
    'xstate.init': { type: 'xstate.init' }
  }
  invokeSrcNameMap: {}
  missingImplementations: {
    actions: never
    services: never
    guards: never
    delays: never
  }
  eventsCausingServices: {}
  eventsCausingGuards: {}
  eventsCausingDelays: {}
  matchesStates:
    | 'phoneIdle'
    | 'appOpen'
    | 'appOpen.animatingIn'
    | 'appOpen.ready'
    | 'appOpen.animatingOut'
    | 'subIconOpen'
    | 'subIconOpen.ready'
    | 'subIconOpen.animatingIn'
    | 'subIconOpen.animatingOut'
    | {
        appOpen?: 'animatingIn' | 'ready' | 'animatingOut'
        subIconOpen?: 'ready' | 'animatingIn' | 'animatingOut'
      }
  tags: never
}