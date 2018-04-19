import React from 'react';
import './editorControls.css';

export default class EditorControl extends React.Component {

  constructor(){
    super();
    this.state = {
      BLOCK_TYPES: [
        {label: 'H1', style: 'header-one', icon: ''},
        {label: 'H2', style: 'header-two', icon: ''},
        {label: 'BlockQuote', style: 'blockquote', icon: 'fa fa-quote-left'},
        {label: 'UL', style: 'unordered-list-item', icon: 'fa fa-list-ul'},
        {label: 'OL', style: 'ordered-list-item', icon: 'fa fa-list-ol'},
        {label: 'Code Block', style: 'code-block', icon: 'fa fa-code'}
      ],
      blockType: ''
    }
  }

  componentDidMount(){
    let {editorState} = this.props;
    let selection = editorState.getSelection();
    this.setState({
      blockType: editorState.getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType()
    })
  }

  componentWillReceiveProps(newProps){
    if(newProps){
      let {editorState} = newProps
      let selection = editorState.getSelection();

      this.setState({
        blockType: editorState.getCurrentContent()
          .getBlockForKey(selection.getStartKey()).getType()
      })
      
    }
  }

  handleClick = (type) => {
    this.props.toggle(type, () => {
      let {editorState} = this.props;
      let selection = editorState.getSelection();
      this.setState({
        blockType: editorState.getCurrentContent()
          .getBlockForKey(selection.getStartKey())
          .getType()
      }, () => {
        console.log(this.state.blockType);
      })
    });
  }

  render(){
    return (
      <div id="editorControls">
        <ul>  
          {
            this.state.BLOCK_TYPES.map(type => 
              <li key={type.label}>
                <button onClick={() => this.handleClick(type.style)} 
                title={type.label} className={type.style === this.state.blockType ? 'controlActive': 'controlInactive'}>
                {type.icon !== '' ? <i className={type.icon}></i>
                  : type.label
                }
                </button>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}