import { styled } from '@nimbus-ui/styled-system/jsx'
import type { ComponentProps, StyledComponent } from '@nimbus-ui/styled-system/types'
import { forwardRef } from 'react'
import { I18nProvider, useLocale } from 'react-aria-components'

interface Props {
  /**
   * The [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt) language code for the locale.
   * Default to `"en-US"`.
   */
  locale: string
}

type StyledDivProps = ComponentProps<StyledComponent<'div'>>
export type LocaleProps = StyledDivProps & Props

export const Locale = forwardRef(
  ({ children, locale, ...props }: LocaleProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <I18nProvider locale={locale}>
        <LocaleWrapper ref={ref} {...props}>
          {children}
        </LocaleWrapper>
      </I18nProvider>
    )
  }
)

Locale.displayName = 'NimbusUI_Locale'

const LocaleWrapper = forwardRef(
  ({ children, ...props }: StyledDivProps, ref: React.Ref<HTMLDivElement>) => {
    const { locale, direction } = useLocale()

    return (
      <styled.div lang={locale} dir={direction} ref={ref} {...props}>
        {children}
      </styled.div>
    )
  }
)

LocaleWrapper.displayName = 'NimbusUI_LocaleWrapper'
