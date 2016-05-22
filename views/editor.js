import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState, convertFromRaw, convertToRaw} from 'draft-js';
require('draft-js/dist/Draft.css');

class MyEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});
    }

    render() {
        const {editorState} = this.state;
        return (
            <Editor
                editorState={editorState} 
                onChange={this.onChange} 
                placeholder='tell a story'
            />
        )
    }

}

export default MyEditor
