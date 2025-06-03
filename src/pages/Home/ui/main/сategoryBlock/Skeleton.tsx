import ContentLoader from "react-content-loader";

const PizzaSkeleton = () => (
  <ContentLoader
    speed={2}
    width={297}
    height={475}
    viewBox="0 0 297 475"
    backgroundColor="#e8e8e8"
    foregroundColor="#ffffff"
  >
    <circle cx="148" cy="125" r="121" />
    <rect x="-3" y="275" rx="13" ry="13" width="217" height="33" />
    <rect x="-1" y="319" rx="20" ry="20" width="297" height="73" />
    <rect x="2" y="441" rx="11" ry="11" width="68" height="30" />
    <rect x="195" y="436" rx="20" ry="20" width="100" height="40" />
  </ContentLoader>
);

export default PizzaSkeleton;
