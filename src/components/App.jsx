import _ from "lodash";

const modals = [
  {
    id: 1,
    title: "Welcome Title 1 1",
    title1: "Welcome subTitle 1 2",
    text: "Welcome Text 1",
  },
  {
    id: 2,
    title: "Welcome Title 2 1",
    title1: "Welcome subTitle 2 2",
    text: "Welcome Text 2",
  },
  {
    id: 3,
    title: "Welcome Title 3 1",
    title1: "Welcome subTitle 3 2",
    text: "Welcome Text 3",
  },
  {
    id: 4,
    title: "Welcome Title 4 1",
    title1: "Welcome subTitle 4 2",
    text: "Welcome Text 4",
  },
  {
    id: 5,
    title: "Welcome Title 5 1",
    title1: "Welcome subTitle 5 2",
    text: "Welcome Text 5",
  },
];

const App = ({ store, setStore }) => {
  return (
    <div id="app">
      <h1>Modal</h1>
      <div className="main">
        {modals.map((modal, index) => {
          return <button
            key={`modal-${index}`}
            onClick={() => {
              const newStore = _.cloneDeep(store);
              _.set(newStore, `modalProperty.showModal`, true);
              _.set(newStore, `modalProperty.title`, modal.title);
              _.set(newStore, `modalProperty.title1`, modal.title1);
              _.set(newStore, `modalText`, modal.text);
              setStore(newStore);
            }}
          >
            Modal {modal.id}
          </button>
        })
        }
      </div>
    </div>
  )
};


   


export default App;
