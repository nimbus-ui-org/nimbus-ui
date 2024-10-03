import { useEffect, useRef, type PropsWithChildren } from 'react'
import { I18nProvider, useLocale } from 'react-aria-components'

export interface NimbusProviderProps {
  /**
   * The [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt) language code for the locale.
   * Default to `"en-US"`.
   */
  locale?: string
}

export const NimbusProvider = ({
  locale,
  children
}: React.PropsWithChildren<NimbusProviderProps>) => {
  return (
    <I18nProvider locale={locale}>
      <ProviderWrapper locale={locale}>{children}</ProviderWrapper>
    </I18nProvider>
  )
}

const ProviderWrapper = ({
  locale,
  children
}: PropsWithChildren<NimbusProviderProps>) => {
  const { locale: currentLocale, direction } = useLocale()

  const initialRender = useRef(true)

  useEffect(() => {
    const html = document.documentElement
    const htmlLang = html.getAttribute('lang')
    if (initialRender.current && htmlLang && locale && htmlLang !== locale) {
      console.warn(
        `The lang on your html element (${htmlLang}) does not match the locale you provided to NimbusProvider (${locale}).`
      )
    } else {
      html.setAttribute('lang', currentLocale)
      html.setAttribute('dir', direction)
    }

    initialRender.current = false
  }, [currentLocale, direction, locale])

  return children
}
