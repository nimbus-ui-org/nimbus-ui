import { Button } from '@nimbus-ui/core'
import { css } from '@nimbus-ui/styled-system/css'
import { Stack } from '@nimbus-ui/styled-system/jsx'

function App() {
  return (
    <>
      <h1 className={css({ fontSize: '2xl' })}>shipping/with-build-info</h1>
      <Stack>
        <Button>Button component from ui lib</Button>
      </Stack>
    </>
  )
}

export default App
