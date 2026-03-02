type Pagedata = {
  title: string
}
const PageMeta = ({ title }: Pagedata) => {
  return (
    <title>
      {title
        ? `Silicon | ${title}`
        : "Silicon - Multipurpose Technology Bootstrap Template"}
    </title>
  );
};

export default PageMeta;
 