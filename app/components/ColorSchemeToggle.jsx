import styled from "styled-components";

const ToggleIcon = styled.svg`
  flex-shrink: none;
`;

const ColorSchemeToggle = () => {
  return <Sun />;
};

const Sun = () => {
  return (
    <ToggleIcon
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="13" cy="13" r="6.54545" fill="#FCBC55" />
      <path d="M13 0L14.7321 4.5H11.2679L13 0Z" fill="#FCBC55" />
      <path
        d="M21.3235 4.21887L20.1281 8.68029L16.8621 5.4143L21.3235 4.21887Z"
        fill="#FCBC55"
      />
      <path
        d="M4.21887 4.21887L8.68029 5.41431L5.4143 8.68029L4.21887 4.21887Z"
        fill="#FCBC55"
      />
      <path
        d="M21.6569 21.6569L17.1954 20.4614L20.4614 17.1954L21.6569 21.6569Z"
        fill="#FCBC55"
      />
      <path
        d="M4.21881 21.7811L5.41425 17.3197L8.68023 20.5857L4.21881 21.7811Z"
        fill="#FCBC55"
      />
      <path d="M26 13L21.5 14.7321L21.5 11.2679L26 13Z" fill="#FCBC55" />
      <path
        d="M2.38498e-08 13L4.5 11.2679L4.5 14.7321L2.38498e-08 13Z"
        fill="#FCBC55"
      />
      <path d="M13 26L11.2679 21.5L14.7321 21.5L13 26Z" fill="#FCBC55" />
    </ToggleIcon>
  );
};

export default ColorSchemeToggle;
