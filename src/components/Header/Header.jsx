import { Button, Container, Stack, Form } from "react-bootstrap";
import "./Header.scss";
import { useState } from "react";

export const Header = ({ categories, onFilter, onSearch }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    onSearch(searchTerm);
  };

  const handleClick = (category) => {
    onFilter(category === "all" ? "" : category);
  };

  return (
    <Container className="header">
      <h1>Products List</h1>
      <Stack
        direction="vertical"
        gap={3}
        className="btns justify-content-center flex-md-row"
      >
        {categories.map((item, index) => (
          <Button onClick={() => handleClick(item)} key={index}>
            {item}
          </Button>
        ))}
      </Stack>
      <Form.Control
        className="w-50 mx-auto m-5"
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleChange}
      />
    </Container>
  );
};
export default Header;
