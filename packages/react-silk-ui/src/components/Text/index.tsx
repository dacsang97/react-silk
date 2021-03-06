import * as React from 'react'
import ReactNative, { StyleSheet } from 'react-native'

export interface Props {
  style?: ReactNative.StyleProp<ReactNative.TextStyle>
}

const styles = StyleSheet.create({
  baseText: {
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
  h1: {
    fontSize: 30,
  },
  h2: {
    fontSize: 28,
  },
  h3: {
    fontSize: 26,
  },
  h4: {
    fontSize: 24,
  },
  h5: {
    fontSize: 22,
  },
  h6: {
    fontSize: 20,
  },
})

export const Text: React.FunctionComponent<Props> = ({ style, ...props }) => (
  <ReactNative.Text style={[styles.text, style]} {...props} />
)

export const Heading1: React.FunctionComponent<Props> = ({
  style,
  ...props
}) => {
  return (
    <ReactNative.Text style={[styles.baseText, styles.h1, style]} {...props} />
  )
}

export const Heading2: React.FunctionComponent<Props> = ({
  style,
  ...props
}) => {
  return (
    <ReactNative.Text style={[styles.baseText, styles.h2, style]} {...props} />
  )
}

export const Heading3: React.FunctionComponent<Props> = ({
  style,
  ...props
}) => {
  return (
    <ReactNative.Text style={[styles.baseText, styles.h3, style]} {...props} />
  )
}

export const Heading4: React.FunctionComponent<Props> = ({
  style,
  ...props
}) => {
  return (
    <ReactNative.Text style={[styles.baseText, styles.h4, style]} {...props} />
  )
}

export const Heading5: React.FunctionComponent<Props> = ({
  style,
  ...props
}) => {
  return (
    <ReactNative.Text style={[styles.baseText, styles.h5, style]} {...props} />
  )
}

export const Heading6: React.FunctionComponent<Props> = ({
  style,
  ...props
}) => {
  return (
    <ReactNative.Text style={[styles.baseText, styles.h6, style]} {...props} />
  )
}
