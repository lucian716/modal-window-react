import _ from "lodash";

const Modal = ({ store, setStore }) => {
  return (
    <div
      className="modal"
      style={{
        display: store.showModal ? "block" : "none",
      }}
    >
      <div className="background"></div>
      <div className="modal-container">
        <div className="header">
                  {
                  store.modalProperty.title
                  }
          <button
            onClick={() => {
              const newStore = _.cloneDeep(store);
              _.set(newStore, `modalProperty`, true);
              setStore(newStore);
            }}
          >
            x
          </button>
        </div>
        <div className="body">
        <h2 style={{ textAlign: "left" }}
        >
            {
                store.modalProperty.title1
            }
        </h2>
          <p>
             {
                  store.modalText
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
