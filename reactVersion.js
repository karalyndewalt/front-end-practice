const Button = (id, value, buttonClick) => {
	<button
    id={`button${id}`}
    onclick={evt => buttonClick(evt.target.value)}
    value={`text${value}`}
  >
  {`Text ${id} BTN`}
  </button>
};


class ButtonBuddy extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	textFields: [
         {id:"1", value: "TEXT 1", hidden: false,},
         {id:"2", value: "TEXT 2", hidden: false,},
         {id:"3", value: "TEXT 3", hidden: false,},
      ]
    }

	buttonClick = (value) => {
    let newState = {}

    }

  render() {
  	{ textFields } = this.state

    return (
      <div>
        <h2>ButtonBuddy</h2>
        <span id='LeftCol'>
           {textFields.map(text => {
           	<Button
              id=text.id
              value=text.value
              isHidden=text.hidden
              buttonClick={buttonClick(value)}
            >
           	  {text.value}
           	</Button>
           })
           }
        </span>
        <span id="RightCol">
          {textFields.map(text => {
          	<div
              id={`text${text.id}`}
              hidden={text.hidden}
            >
              {text.value}
            </div>
          	})
          }
        </span>
      </div>
    )
  }
}

ReactDOM.render(<ButtonBuddy />, document.querySelector("root"))




// const Button = ({id, value, buttonClick}) => {
//   <button
//     id={`button${id}`}
//     onclick={buttonClick(this)}
//     value={`text${value}`}
//   >
//     {`Text ${id} BTN`}
//   </button>
// };

// function Button({id, value, buttonClick}) {
//   console.log("here...")
//   console.log(id)
//   return (
//     <button>
//       {`Text ${id} BTN`}
//     </button>
// )
// }
