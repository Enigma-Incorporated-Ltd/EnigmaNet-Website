type Pagedata = {
  title: string
}
const PageMeta = ({ title }: Pagedata) => {
  return <title>{title ? `Enigma Net | ${title}` : 'Enigma Net -Advanced Internet Connectivity'}</title>;
};

export default PageMeta;
 