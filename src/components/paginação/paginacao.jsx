import Pagination from 'react-bootstrap/Pagination';


const paginacao = () => {
let active = 2;
let items = [];
for (let number = 1; number <= 11; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}
  return (

    <div>
    <Pagination>{items}</Pagination>
    <br />
  </div>
  )

}

export default paginacao