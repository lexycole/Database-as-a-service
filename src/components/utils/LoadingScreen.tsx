import Spinner from './Spinner';

function LoadingScreen() {
  return (
    <div className="fixed z-[99999] h-[100vh] w-[100vw] bg-[#FFF] flex items-center justify-center">
      <Spinner />
    </div>
  );
}

export default LoadingScreen;
