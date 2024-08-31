import { css } from '@docs/styled-system/css'
import { Stack } from '@docs/styled-system/jsx'
import { Button } from '@nimbus-ui/core'

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
