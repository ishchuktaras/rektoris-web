import * as XLSX from "xlsx";

type Data = Record<string, any>[];

export default function exportDataToExcel(data: Data, filename: string): void {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  XLSX.writeFile(workbook, `${filename}.xlsx`);
}