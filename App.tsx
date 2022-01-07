import { StatusBar } from 'expo-status-bar'
import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const App: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Testing TEXT</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
