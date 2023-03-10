<TextInput
 style={styles.inputBox}
 onChangeText={text => {
    this.setState({
        text:text
        isSearchPressed: false,
        word  "Loading...",
        lexicalCategory : '',
        examples : [],
        defination : ""
    });
 }}
 value={this.state.text}
 />