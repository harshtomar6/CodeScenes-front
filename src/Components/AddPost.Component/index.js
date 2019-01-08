import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import './editorStyles.css';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #3C40C6;
  color: #fff;
  position: fixed;
  right: 30px;
  top: 105px;
  border: 1px solid blue;
  padding: 8px 20px;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 5px;
  transition: all 0.5s;

  &:focus{
    outline: none;
  }
`;

const TitleInput = styled.input`
  font-size: 4rem;
  border: 0;
  margin: 20px auto;
  width: 100%;

  &:focus{
    outline: none;
  }
`;

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
      <div style={{paddingTop: '80px', position: 'relative'}}>
        <div className="editor" >
          <div style={{margin: 'auto', maxWidth: '900px'}}>
            <TitleInput placeholder="Title"/>
          </div>
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
        <Button>Publish</Button>
      </div>
    );
  }
}