import Pagination from "@mui/material/Pagination";

interface ReuPaginationProps {
  count: number;
  page: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}


const ReuPagination: React.FC<ReuPaginationProps> = ({ count, page, onPageChange }) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    onPageChange(event, value);
  };
  return (
    <>
      <Pagination count={count} page={page}
            onChange={handleChange}/>
    </>
  );
};

export default ReuPagination;
