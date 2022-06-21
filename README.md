# React-native-web-responsive

### Basic Usage

```sh

function App() {

  const { responsiveValue } = useResponsive();

  return (
    <View>
      <View style={{ 
        height: responsiveValue([{
          value: 10,
          type: ResponsiveType.XXS
        },
        {
          value: 100,
          type: ResponsiveType.XL
        }]),
        
        width: responsiveValue([{
          value: 10,
          type: ResponsiveType.XXS
        },
        {
          value: 100,
          type: ResponsiveType.XL
        }]),  
       }} />
    </View>
  );
}

export default App;
```

### Parameters

| Argument | Value |
| ------ | ------ |
| Array | IResponsive |

### Type
####IResponsive
| Name | Value |
| ------ | ------ |
| value | number |
| type | ResponsiveType / number |
