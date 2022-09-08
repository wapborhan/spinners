const DATA = [
  {
    id: 1,
    name: "Spinner 1",
    class: "loader1",
    code: `
    .loader1,
    .loader1:before,
    .loader1:after {
      background: red;
      -webkit-animation: load1 1s infinite ease-in-out;
      animation: load1 1s infinite ease-in-out;
      width: 1em;
      height: 4em;
    }
    .loader1 {
      color: red;
      text-indent: -9999em;
      margin: 88px auto;
      position: relative;
      font-size: 11px;
      -webkit-transform: translateZ(0);
      -ms-transform: translateZ(0);
      transform: translateZ(0);
      -webkit-animation-delay: -0.16s;
      animation-delay: -0.16s;
    }
    .loader1:before,
    .loader1:after {
      position: absolute;
      top: 0;
      content: "";
    }
    .loader1:before {
      left: -1.5em;
      -webkit-animation-delay: -0.32s;
      animation-delay: -0.32s;
    }
    .loader1:after {
      left: 1.5em;
    }
    @-webkit-keyframes load1 {
      0%,
      80%,
      100% {
        box-shadow: 0 0;
        height: 4em;
      }
      40% {
        box-shadow: 0 -2em;
        height: 5em;
      }
    }
    @keyframes load1 {
      0%,
      80%,
      100% {
        box-shadow: 0 0;
        height: 4em;
      }
      40% {
        box-shadow: 0 -2em;
        height: 5em;
      }
    }`,
  },
  {
    id: 2,
    name: "Spinner 2",
    class: "loader2",
    code: ``,
  },
  {
    id: 3,
    name: "Spinner 3",
    class: "loader3",
    code: ``,
  },
  {
    id: 4,
    name: "Spinner 4",
    class: "loader4",
    code: ``,
  },
  {
    id: 5,
    name: "Spinner 5",
    class: "loader5",
    code: ``,
  },
  {
    id: 6,
    name: "Spinner 6",
    class: "loader6",
    code: ``,
  },
  {
    id: 7,
    name: "Spinner 7",
    class: "loader7",
    code: ``,
  },
  {
    id: 8,
    name: "Spinner 8",
    class: "loader8",
    code: ``,
  },
];

export default DATA;
