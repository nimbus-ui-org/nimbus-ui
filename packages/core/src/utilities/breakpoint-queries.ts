import { token, type BreakpointToken } from '@nimbus-ui/styled-system/tokens'

const up = (breakpoint: BreakpointToken) =>
  `(min-width: ${token(`sizes.breakpoint-${breakpoint}`)})`

const down = (breakpoint: BreakpointToken) =>
  `(max-width: ${token(`sizes.breakpoint-${breakpoint}`)})`

const range = (from: BreakpointToken, to: BreakpointToken) =>
  `(min-width: ${token(`sizes.breakpoint-${from}`)}) and (max-width: ${token(`sizes.breakpoint-${to}`)})`

export const breakpoints = { up, down, range }
