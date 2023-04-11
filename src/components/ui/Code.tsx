'use client'

import { useTheme } from 'next-themes'
import Highlight, { defaultProps, type Language } from 'prism-react-renderer'
import darkTheme from 'prism-react-renderer/themes/nightOwl'
import lightTheme from 'prism-react-renderer/themes/nightOwlLight'
import { FC, useEffect, useState } from 'react'

interface CodeProps {
  code: string
  show: boolean
  language: Language
  animationDelay?: number
  animated?: boolean
}

const Code: FC<CodeProps> = ({
  code,
  show,
  animated,
  animationDelay,
  language,
}) => {
  const { theme: applicationTheme } = useTheme()
  const [text, setText] = useState<string>(animated ? '' : code)

  useEffect(() => {
    // if the code needs to be shown and animated
    if (show && animated) {
      let i = 0
    //   as we want to show the code after a delay
    // if we didnt pass any delay animation then the default delay is 150ms
      setTimeout(() => {
        // we are using setInterval to show the code letter by letter
        const intervalId = setInterval(() => {
            // we are setting the text to the code slice from 0 to i
          setText(code.slice(0, i))
          i++
        //   if i is greater than the length of the code then we 
        // are clearing the interval
          if (i > code.length) {
            // we are clearing the interval as animation is done
            clearInterval(intervalId)
          }
        }, 15)

        // we are returning a function to clear the interval or else we get a memory leak
        return () => clearInterval(intervalId)
      }, animationDelay || 150)
    }
    // we are passing the code, show, animated and animationDelay
    //  as dependencies
  }, [code, show, animated, animationDelay])

    // number of lines
    // to calculate the number of lines we are splitting the code by new line   
  const lines = text.split(/\r\n|\r|\n/).length

  const theme = applicationTheme === 'light' ? lightTheme : darkTheme

  return (
    // syntax highlighting using prism-react-renderer
    <Highlight {...defaultProps} code={text} language={language} theme={theme}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={
            className +
            'transition-all w-fit bg-transparent duration-100 py-0 no-scrollbar'
          }
          // we are setting the max height and opacity based on the show prop
          style={{
            // we are multiplying the number of lines by 24 as each line is 24px
            maxHeight: show ? lines * 24 : 0,
            // we are setting the opacity to 1 if show is true else 0
            opacity: show ? 1 : 0,
          }}>
          {/* // we are mapping over the tokens and returning a div for each line */}
          {tokens.map((line, i) => {
            // eslint-disable-next-line no-unused-vars
            const { key, ...rest } = getLineProps({ line, key: i })
            return (
                // we are returning a div for each line
              <div key={`line-${i}`} style={{ position: 'relative' }} {...rest}>
                {/* // we are mapping over the tokens and returning a span for each token */}
                {line.map((token, index) => {
                  // eslint-disable-next-line no-unused-vars
                  const { key, ...props } = getTokenProps({ token, i })
                //   we are returning a span for each token
                  return <span key={index} {...props} />
                })}
              </div>
            )
          })}
        </pre>
      )}
    </Highlight>
  )
}

export default Code