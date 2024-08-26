import { Button as AriaButton } from 'react-aria-components'
import type { ButtonProps } from 'react-aria-components'
import { css } from '@nimbus-ui/styled-system/css'

export const Button: React.FC = (props: ButtonProps) => {
  return <AriaButton className={css({ fontSize: 'large' })} {...props}></AriaButton>
}
