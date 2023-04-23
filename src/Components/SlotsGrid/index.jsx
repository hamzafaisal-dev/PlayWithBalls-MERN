import React from "react";
import {
  Table,
  TableContainer,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
} from "@mui/material";

export default function SlotsGrid({ slots }) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Start time</TableCell>
            <TableCell>End time</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {slots.map((slot) => (
            <TableRow key={slot._id}>
              <TableCell>{slot.startTime}</TableCell>
              <TableCell>{slot.endTime}</TableCell>
              <TableCell>{slot.status}</TableCell>
              <TableCell>{slot.rate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
