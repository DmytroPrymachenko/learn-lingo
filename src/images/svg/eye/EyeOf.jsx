const EyeOf = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g
      stroke="#121417"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.873}
      clipPath="url(#a)"
    >
      <path d="M14.218 14.218a7.858 7.858 0 0 1-4.635 1.608C4.121 15.826 1 9.583 1 9.583a14.397 14.397 0 0 1 3.948-4.635m2.997-1.42a7.116 7.116 0 0 1 1.638-.187c5.463 0 8.584 6.242 8.584 6.242a14.437 14.437 0 0 1-1.686 2.49m-5.243-.835A2.34 2.34 0 0 1 7.184 9.6 2.34 2.34 0 0 1 7.93 7.93M1 1l17.167 17.167" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default EyeOf;
