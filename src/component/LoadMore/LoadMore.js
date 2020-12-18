import s from './LoadMore.module.css';

export default function LoadMore({ onLoadMore, showBtn }) {
  return (
    <div className="wrapper">
      <button className={s.button} type="button" onClick={onLoadMore}>
        Load More
      </button>
    </div>
  );
}
