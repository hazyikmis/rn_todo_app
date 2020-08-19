In React Native:

- All elements shown on the screen using flexBox with flexDirection: "column" by default.

- FlatList have a better performance for infinite or long listing. (rather than ViewList). FlatList has an internal id/key structure, yo do not need to arrange id/key for each item, it examines the data and defines which data could be a key. Because of that, your list should contain some data which could ba a key. You are writing the content of each list item in the "renderItem" callback props.
