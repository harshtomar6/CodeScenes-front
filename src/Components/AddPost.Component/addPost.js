import React from 'react';
import './addPost.css';
import { Editor, EditorState, RichUtils, getDefaultKeyBinding, DefaultDraftBlockRenderMap } from 'draft-js'; 
import Immutable from 'immutable';
import { stateToHTML } from 'draft-js-export-html';
import EditorControl from './editorControls';
import { postData } from './../../globals';

class AddPost extends React.Component {

  constructor(){
    super();

    this.handleChange = this.handleChange.bind(this);
    this.editor = null;
  
    this.state = {
      title: 'Your Post Title Here',
      editorState: EditorState.createEmpty()
    }

    this.styleMap = {
      CODE: {
        backgroundColor: 'red',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2,
      },
    };

    this.blockRenderMap = DefaultDraftBlockRenderMap.merge(Immutable.Map({
      'header-one': {
        element: 'h1'
      },
      'header-two': {
        element: 'h2'
      },
      'blockquote': {
        element: 'blockquote'
      },
      'unstyled': {
        element: 'p'
      }
    })
    )
  }

  componentWillMount(){
    if(!localStorage.getItem('loggedIn'))
      this.props.history.push('/login');
  }

  componentDidMount(){
    this.focus();
    document.title = 'New Post | CodeScenes'
  }

  focus = () => this.editor.focus();

  handleChange(e){
    this.setState({
      title: e.target.value
    })
  }
  
  _handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.handleEditorChange(newState);
      return true;
    }
    return false;
  }

  _mapKeyToEditorCommand = (e)  => {
    console.log(e.keyCode)
    if (e.keyCode === 9 /* TAB */) {
      e.preventDefault();
      const newEditorState = RichUtils.onTab(
        e,
        this.state.editorState,
        4, /* maxDepth */
      );
      if (newEditorState !== this.state.editorState) {
        this.handleEditorChange(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e);
  }

  handleEditorChange = (newEditorState, callback) => this.setState({editorState: newEditorState},() => {
    if(callback)
      callback()
  });

  _toogleBlockType = (blockType, callback) => {
    this.handleEditorChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      ), () => {
        this.editor.focus();
        if(callback)
          callback();
      }
    );
  }

  getBlockStyle = block => {
    switch (block.getType()) {
      case 'blockquote': return 'RichEditor-blockquote';
      default: return null;
    }
  }

  handleSubmit = async () => {
    let { editorState } = this.state;
    let content = stateToHTML(editorState.getCurrentContent()).toString();
    let author = localStorage.getItem('userData')
    author = JSON.parse(author);

    let res = await postData({
      path: '/api/post',
      headers: {
        'X-Access-Token': author.token,
        'X-Key': author.user._id
      }
    }, {
      title: this.state.title,
      content: content,
      isPublished: true
    });
    
    if(res.err)
      console.log(res.err);
    else
      console.log(res.data);
  }

  render(){
    return (
      <div>
      <div className="wrap" style={{paddingTop: '60px'}}>
        <div className="head-section">
          <input type="text" className="form-input title-head" placeholder={this.state.title} 
            onChange={this.handleChange} />
        </div>
        <div className="overlay">
          <div id="editor-wraper" className="RichEditor-editor">
            <EditorControl toggle={this._toogleBlockType} editorState={this.state.editorState}/>
            <Editor
              blockStyleFn={this.getBlockStyle}
              customStyleMap={this.styleMap} 
              editorState={this.state.editorState}
              handleKeyCommand={this._handleKeyCommand}
              keyBindingFn={this._mapKeyToEditorCommand}
              onChange={this.handleEditorChange}
              blockRenderMap={this.blockRenderMap}
              spellCheck
              ref={e => this.editor = e}
            />
          </div>
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
      </div>
    );
  }
}

export default AddPost;