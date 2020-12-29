import React from 'react';
import styled from 'styled-components'
// import {updateEntry} from '../utils/Management';



const WrappedDiv = styled.div`
  position:fixed;
  background:white;
  z-index:10000;
  top:0;
  right:0px;
  width:224px;
  bottom:0px
`

const EditorWrapper = (props) => {
  // const updateContent = (fields) => updateEntry(props.id, fields)
  return (
    <WrappedDiv>
      <header >
        <button>Hide</button>
        <button>Delete</button>
        <button>Save</button>
        <button>Close</button>
      </header>
      <section>
        <form>
          {/* <label>Classes</label><br /><textarea onBlur={(e) => updateContent({ ['classes']: e.target.value })} defaultValue={props.classes} /> */}
          <br />
          <label>Style</label><br /><textarea defaultValue={props.style} />
          <br /><a >Edit Content</a>
        </form>
      </section>
    </WrappedDiv>
  )
}

export default EditorWrapper