import Navbar from './MenuBar';

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <p className='m-5'>Hey! Harshit</p>
      <main>{children}</main>
      <Navbar />
    </>
  );
}