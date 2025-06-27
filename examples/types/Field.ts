// enums defined
export type Cell = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

// Matrix defined of cell
export type Field = Cell[][];

// Tuples for coords
export type Coords = [number, number];

// state managed by Record
export const CellState: Record<string, Cell> = {
  empty: 0,
  bomb: 9,
  hidden: 10,
  mark: 11,
  weekMark: 12,
};
