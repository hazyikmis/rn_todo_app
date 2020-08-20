In React Native:

- All elements shown on the screen uses flexBox with flexDirection: "column" by default.

- FlatList have a better performance for infinite or long listing. (rather than ViewList). FlatList has an internal id/key structure, yo do not need to arrange id/key for each item, it examines the data and defines which data could be a key. Because of that, your list should contain some data which could ba a key. You are writing the content of each list item in the "renderItem" callback props.

- For "onPress", its not good for using for "View" components. You have to work at low levels. In order to use "onPress", best way wrapping View with one of the components below:
  - TouchableOpacity
  - TouchableHighlight
  - TouchableNativeFeedback (only for android)
  - TouchableWithoutFeedback (only for android)
