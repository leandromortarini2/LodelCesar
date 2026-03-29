import { useState, useRef } from "react";
import type { ChangeEvent } from "react";
interface UseSearchProps<T> {
  initialData: T[];
  searchFields: (keyof T)[];
}

export function useSearch<T>({ initialData, searchFields }: UseSearchProps<T>) {
  const [dataTable, setDataTable] = useState<T[]>(initialData);
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleOnSearch = () => {
    if (!searchValue.trim()) {
      handleClean();
      return;
    }

    setIsSearching(true);
    const results = initialData.filter((item) =>
      searchFields.some((field) =>
        String(item[field]).toLowerCase().includes(searchValue.toLowerCase())
      )
    );
    setDataTable(results);
  };

  const handleClean = () => {
    setIsSearching(false);
    setSearchValue("");
    setDataTable(initialData);
    inputRef.current?.focus();
  };

  return {
    dataTable,
    searchValue,
    isSearching,
    inputRef,
    handleOnSearch,
    handleClean,
    onChange,
    setDataTable,
  };
}
