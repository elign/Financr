import Navbar from './MenuBar';
 
export default function Layout({ children } : {children : any}) {
  return (
    <>
      <main>{children}</main>
      <Navbar />
    </>
  );
}