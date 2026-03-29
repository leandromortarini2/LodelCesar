/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";

export interface ColumnConfig {
  header: string | React.ReactNode;
  field?: string;
  render?: (item: any) => React.ReactNode;
  width?: string;
  align?: "left" | "right" | "center";
}

interface ReusableTableProps {
  data: any[];
  config: ColumnConfig[];
  onSelect?: (item: any) => void;
  selectable?: boolean;
  showHeaders?: boolean;
  hoverable?: boolean;
  textSize?: string;
}

export default function CustomeTable({
  data,
  config,
  onSelect,
  selectable = false,
  showHeaders = true,
  hoverable = true,
  textSize,
}: ReusableTableProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const getAlignmentClass = (
    align: "left" | "right" | "center" | undefined
  ) => {
    switch (align) {
      case "right":
        return "text-right";
      case "center":
        return "text-center";
      default:
        return "text-left";
    }
  };

  const handleRowClick = (item: any, index: number) => {
    if (!selectable) return;
    setSelectedIndex(index);
    if (onSelect) onSelect(item);
  };

  useEffect(() => {
    if (!selectable) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (data.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = Math.min(selectedIndex + 1, data.length - 1);
        handleRowClick(data[next], next);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev = Math.max(selectedIndex - 1, 0);
        handleRowClick(data[prev], prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, data, selectable]);

  return (
    <div
      className={`overflow-x-auto w-full outline-none ${
        selectable ? "focus:ring-1 focus:ring-blue-300 rounded-2xl" : ""
      }`}
      tabIndex={selectable ? 0 : -1}
    >
      <table className="w-full table-fixed divide-y divide-[#E5E7EB]  rounded-lg overflow-hidden  border-separate border-spacing-0">
        {showHeaders && (
          <thead className="bg-secondary text-white">
            <tr>
              {config.map((column, index) => (
                <th
                  key={index}
                  className={`px-6 h-12 ${
                    textSize ? textSize : "text-xs"
                  }  font-medium uppercase tracking-wider ${
                    column.width
                  } ${getAlignmentClass(column.align)}`}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody className="bg-white">
          {data.map((item, rowIndex) => {
            const isSelected = selectable && selectedIndex === rowIndex;

            return (
              <tr
                key={rowIndex}
                onClick={() => handleRowClick(item, rowIndex)}
                className={`transition-colors ${
                  selectable ? "cursor-pointer" : "cursor-default"
                } ${
                  isSelected
                    ? "bg-tertiary text-white"
                    : rowIndex % 2 === 0
                    ? `bg-white ${hoverable ? "hover:bg-gray-100" : ""}`
                    : `bg-blue-50 ${hoverable ? "hover:bg-gray-100" : ""}`
                }`}
              >
                {config.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className={`px-6 h-12 whitespace-nowrap  border-b border-gray-100 ${getAlignmentClass(
                      column.align
                    )}  ${textSize ? textSize : "text-xs"}   `}
                  >
                    {column.render
                      ? column.render(item)
                      : column.field
                      ? item[column.field]
                      : ""}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
