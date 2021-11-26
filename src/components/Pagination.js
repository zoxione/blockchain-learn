import {PageContext} from './page-context';
import './Pagination.css';

function Pagination() {
  return (
    <PageContext.Consumer>
      {({page, togglePage}) => (
        <div className="pagination">
          <button onClick={togglePage.bind(this, 1)}>
            <div className={"pagination_item " + (page === 1 ? 'pagination_item_active' : '')} />
          </button>
          <button onClick={togglePage.bind(this, 2)}>
            <div className={"pagination_item " + (page === 2 ? 'pagination_item_active' : '')} />
          </button>
          <button onClick={togglePage.bind(this, 3)}>
            <div className={"pagination_item " + (page === 3 ? 'pagination_item_active' : '')} />
          </button>
          <button onClick={togglePage.bind(this, 4)}>
            <div className={"pagination_item " + (page === 4 ? 'pagination_item_active' : '')} />
          </button>
        </div>
      )}
    </PageContext.Consumer>
  );
}

export default Pagination;