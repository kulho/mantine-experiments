import { Table } from "@mantine/core";

function TableExample() {
  const elements = [
    { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
    { position: 6, mass: 12.011, symbol: "C", name: "Carbona" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogenb" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttriumc" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Bariumd" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Ceriume" },
    { position: 6, mass: 12.011, symbol: "C", name: "Carbonb" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogenc" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttriumd" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Bariume" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Ceriumf" },
    { position: 6, mass: 12.011, symbol: "C", name: "Carbonc" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogend" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttriume" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Bariumf" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Ceriumg" },
    { position: 6, mass: 12.011, symbol: "C", name: "Carbond" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogene" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttriumf" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Bariumg" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Ceriumh" },
    { position: 6, mass: 12.011, symbol: "C", name: "Carbone" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogenf" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttriumg" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Bariumh" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Ceriumi" },
    { position: 6, mass: 12.011, symbol: "C", name: "Carbonf" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogeng" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttriumh" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Bariumi" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Ceriumj" },
  ];

  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));

  return (
    <Table>
      <thead>
        <tr>
          <th>Element position</th>
          <th>Element name</th>
          <th>Symbol</th>
          <th>Atomic mass</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

export default TableExample;
