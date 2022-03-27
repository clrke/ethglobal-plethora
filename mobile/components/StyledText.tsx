import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}



export function MontserratText(props: TextProps) {
  return <Text {...props} style={[{ fontFamily: 'monstserrat-regular', fontSize:14},  props.style]} />;
}
