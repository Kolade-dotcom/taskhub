import React, { useEffect } from "react";
import {
  Box,
  Table,
  Button,
  Paper,
  TableCell,
  TableBody,
  TableHead,
  TableContainer,
  TableRow,
  IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { BrowserRouter as Router, Link } from "react-router-dom";
import useRequestResource from "src/hooks/useResponseRequest";

function Categories() {
  // const results = [
  //   {
  //     id: 1,
  //     name: "Feature",
  //     color: "fff",
  //   },
  //   {
  //     id: 2,
  //     name: "Bug",
  //     color: "ccc",
  //   },
  // ];

  const [resourceList, getResourceList] = useRequestResource({
    endpoint: "categories",
  });

  useEffect(() => {
    getResourceList();
  }, [getResourceList]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 360 }} size="small">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Color</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(resourceList.results)
            ? resourceList.results.map((result) => {
                return (
                  <TableRow key={result.id}>
                    <TableCell align="left">{result.name}</TableCell>
                    <TableCell align="left">{result.color}</TableCell>
                    <TableCell align="right">
                      <Box sx={{ display: "flex", JustifyContent: "flex-end" }}>
                        <Link
                          to={`/categories/edit/${result.id}`}
                          key="category-edit"
                        >
                          <IconButton size="large">
                            <Edit />
                          </IconButton>
                        </Link>
                        <IconButton size="large" onClick={null}>
                          <Delete />
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })
            : console.log(resourceList.results)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Categories;