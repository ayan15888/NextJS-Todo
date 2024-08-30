// pages/index.js or any other page/component
// "use-client"
import Header from '../app/components/header';
import FirstPage from './Pages/FirstPage';
import HomeTab from './Pages/HomeTab';

export default function Home() {
  return (
    <main className=" ">
    <Header/>
      {/* <FirstPage/>  */}
     <HomeTab/>

    </main>
  );
}
