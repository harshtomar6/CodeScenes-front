import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import './editorStyles.css';

export default class SimpleSideToolbarEditor extends Component {

  state = {
    editorState: EditorState.createEmpty(),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  focus = () => {
    this.editor.focus();
  };

  render() {
    return (
      <div style={{paddingTop: '80px'}}>

        <div className="editor" >
          <Editor
            editorState={this.state.editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onChange}
            toolbar={{
              blockType: {
                inDropdown: false, 
                options: ['H1', 'H2', 'Blockquote']
              },
              inline: {
                options: ['bold', 'italic', 'underline']
              },
              fontSize: {
                icon: null
              },
              image: {
                defaultSize: {
                  width: '100%'
                },
                uploadCallback: () => new Promise((resolve, reject) => {
                  resolve('url');
                })
              }
            }}
            />
        </div>
      </div>
    );
  }
}