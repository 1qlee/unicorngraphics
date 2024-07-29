import { StringInputProps, set, unset } from "sanity";
import React, { useCallback, useState } from "react";
import * as icons from "@radix-ui/react-icons";

export default function IconSearch(props: StringInputProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const { onChange } = props;
  const filteredIcons = Object.entries(icons).filter(([name]) => name.toLowerCase().includes((props.value && props.value.toLowerCase()) || ""));

  const handleChange = useCallback(
    (value: string) => {
      onChange(value ? set(value) : unset());
    },
    [onChange],
  );

  function handleIconClick(iconName: string) {
    handleChange(iconName);
    setShowDropdown(false);
  }

  return (
    <div>
      <input
        onChange={(e) => handleChange(e.target.value)}
        onClick={() => setShowDropdown(true)}
        id="iconInput"
        placeholder="Click to search for an icon"
        value={props.value}
        style={{
          position: "relative",
          borderRadius: "0.1875rem",
          backgroundColor: "var(--card-bg-color)",
          border: "1px solid black",
          outline: "none",
          width: "100%",
          boxSizing: "border-box",
          padding: "8px",
        }}
      />
      {showDropdown && (
        <div
          style={{
            maxHeight: "180px",
            position: "absolute",
            overflow: "auto",
            top: "calc(100% - 1px)",
            width: "calc(100% - 2px)",
            border: "1px solid black",
            borderTopWidth: 0,
            borderRadius: "0 0 0.1875rem 0.1875rem",
            left: 0,
          }}
        >
          {filteredIcons.map(([name, Icon]) => (
            <div 
              key={name}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px",
                cursor: "pointer",
              }}
              onClick={() => handleIconClick(name)}
            >
              {React.createElement(Icon as React.FunctionComponent)}
              <span style={{marginLeft:"4px"}}>{name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}